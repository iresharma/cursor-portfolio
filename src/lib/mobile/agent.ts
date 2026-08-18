import { AGENT_UNAVAILABLE, CHIPS } from "./content";

export async function askAgent(prompt: string): Promise<string> {
  const chip = CHIPS.find(
    (item) => item.prompt === prompt || item.label.toLowerCase() === prompt.toLowerCase(),
  );
  if (chip) return chip.reply;
  return AGENT_UNAVAILABLE;
}
