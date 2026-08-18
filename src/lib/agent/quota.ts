import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { AGENT_MESSAGE_LIMIT } from "./copy";

const COOKIE = "agent_quota";
const MAX_AGE = 60 * 60 * 24 * 400;
const ipUsed = new Map<string, number>();

export type Quota = {
  used: number;
  remaining: number;
  exhausted: boolean;
};

function secret(): string {
  return (
    process.env.AGENT_QUOTA_SECRET?.trim() ||
    process.env.OPENROUTER_API_KEY?.trim() ||
    "dev-quota-secret"
  );
}

function sign(used: number): string {
  const payload = String(used);
  const mac = createHmac("sha256", secret()).update(payload).digest("hex");
  return `${payload}.${mac}`;
}

function verify(raw: string): number | null {
  const dot = raw.indexOf(".");
  if (dot <= 0) return null;
  const payload = raw.slice(0, dot);
  const mac = raw.slice(dot + 1);
  const expected = createHmac("sha256", secret()).update(payload).digest("hex");
  const left = Buffer.from(mac);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return null;
  if (!timingSafeEqual(left, right)) return null;
  const used = Number(payload);
  if (!Number.isInteger(used) || used < 0) return null;
  return used;
}

function cookieFromRequest(request: Request): string | undefined {
  const header = request.headers.get("cookie");
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const trimmed = part.trim();
    if (!trimmed.startsWith(`${COOKIE}=`)) continue;
    return decodeURIComponent(trimmed.slice(COOKIE.length + 1));
  }
  return undefined;
}

export function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown";
  return ip;
}

function toQuota(used: number): Quota {
  const safe = Math.min(AGENT_MESSAGE_LIMIT, Math.max(0, used));
  return {
    used: safe,
    remaining: AGENT_MESSAGE_LIMIT - safe,
    exhausted: safe >= AGENT_MESSAGE_LIMIT,
  };
}

export function readQuota(request: Request): Quota {
  const raw = cookieFromRequest(request);
  const fromCookie = raw ? verify(raw) : 0;
  const cookieUsed = fromCookie === null ? AGENT_MESSAGE_LIMIT : fromCookie;
  const fromIp = ipUsed.get(clientKey(request)) ?? 0;
  return toQuota(Math.max(cookieUsed, fromIp));
}

export function consumeQuota(request: Request): Quota {
  const next = toQuota(readQuota(request).used + 1);
  ipUsed.set(clientKey(request), next.used);
  return next;
}

export function withQuotaCookie(response: NextResponse, quota: Quota): NextResponse {
  response.cookies.set(COOKIE, sign(quota.used), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
