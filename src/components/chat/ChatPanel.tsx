"use client";

import { ArrowUp, AtSign, History, Plus } from "lucide-react";
import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";
import { useWorkbench } from "@/state/workbench-context";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const REPLIES = [
  "I'd answer that, but Iresh hasn't written my system prompt yet. The irony is not lost on me.",
  "Noted. Filing this under 'questions I will be able to answer after the agent ships'.",
  "I can see the file tree. I cannot yet see Iresh's soul. Close, though.",
];

export function ChatPanel({ className }: { className?: string }) {
  const { flashStatus } = useWorkbench();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const replyIndex = useRef(0);

  const send = (event?: FormEvent) => {
    event?.preventDefault();
    const text = draft.trim();
    if (!text || pending) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setPending(true);

    window.setTimeout(() => {
      const reply = REPLIES[replyIndex.current % REPLIES.length] ?? REPLIES[0];
      replyIndex.current += 1;
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: "assistant", content: reply },
      ]);
      setPending(false);
      window.requestAnimationFrame(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
      });
    }, 420);
  };

  const onComposerKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      send();
    }
  };

  return (
    <aside className={cn("flex h-full min-w-0 flex-col bg-chat", className)}>
      <header className="flex h-9 shrink-0 items-center justify-between border-b border-line px-3">
        <span className="text-[13px] font-medium text-fg">Agent</span>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            title="History"
            aria-label="History"
            onClick={() => flashStatus("No past chats. This agent has amnesia on purpose.")}
            className="rounded p-1 text-dim hover:bg-hover hover:text-fg"
          >
            <History className="size-4" strokeWidth={1.7} />
          </button>
          <button
            type="button"
            title="New chat"
            aria-label="New chat"
            onClick={() => {
              setMessages([]);
              setDraft("");
            }}
            className="rounded p-1 text-dim hover:bg-hover hover:text-fg"
          >
            <Plus className="size-4" strokeWidth={1.7} />
          </button>
        </div>
      </header>

      <div ref={listRef} className="min-h-0 flex-1 overflow-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
            <p className="text-[15px] text-fg">Ask about Iresh</p>
            <p className="max-w-[260px] text-[12px] leading-5 text-dim">
              This panel will be a real agent. Right now it is a very confident
              placeholder.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {[
                "Roast my resume",
                "What do you actually ship?",
                "Why is this an IDE?",
              ].map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setDraft(prompt)}
                  className="rounded-full border border-line px-3 py-2 text-[12px] text-muted hover:bg-hover hover:text-fg md:px-2.5 md:py-1 md:text-[11px]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="text-[13px] leading-6">
                <p className="mb-1 text-[11px] tracking-wide text-dim uppercase">
                  {message.role === "user" ? "You" : "Agent"}
                </p>
                <p className="text-muted">{message.content}</p>
              </div>
            ))}
            {pending ? (
              <p className="text-[12px] text-dim">Thinking in stub mode…</p>
            ) : null}
          </div>
        )}
      </div>

      <form onSubmit={send} className="border-t border-line p-3 md:border-t-0">
        <div className="rounded-xl border border-line bg-[#1f1f1f] px-3 pt-3 pb-2">
          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={onComposerKeyDown}
            rows={2}
            placeholder="Ask anything about Iresh"
            className="w-full resize-none bg-transparent text-base leading-6 text-fg outline-none placeholder:text-dim md:text-[13px] md:leading-5"
          />
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[12px] text-dim">
              <span className="flex items-center gap-1 rounded-md px-1.5 py-0.5 hover:bg-hover">
                <AtSign className="size-3.5" strokeWidth={1.8} />
                Agent
              </span>
              <span>Auto</span>
            </div>
            <button
              type="submit"
              disabled={!draft.trim() || pending}
              aria-label="Send"
              className="flex size-8 items-center justify-center rounded-md bg-[#2b2b2b] text-fg disabled:text-dim md:size-7"
            >
              <ArrowUp className="size-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </form>
    </aside>
  );
}
