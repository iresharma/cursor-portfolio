import { getGithubSnapshot, GITHUB_REVALIDATE_SECONDS } from "@/lib/fetch-github";

export const revalidate = 900;

export async function GET() {
  const snapshot = await getGithubSnapshot();
  return Response.json(snapshot, {
    headers: {
      "Cache-Control": `public, s-maxage=${GITHUB_REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
    },
  });
}
