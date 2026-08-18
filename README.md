# iresharma

Software engineering portfolio with two surfaces:

- **Desktop** — a Cursor editor window. Explorer is the site map, the editor opens pages, chat is the future agent.
- **Mobile** — a short boot, then a chat: about, chips, and an input that will plug into the same agent.

## Where content lives

- File tree: `src/lib/workspace/tree.ts`
- Page bodies: `src/lib/workspace/documents.ts`
- Mobile chips and copy: `src/lib/mobile/content.ts`
- Agent stub: `src/lib/mobile/agent.ts`

## Desktop shortcuts

- `⌘P` / `Ctrl+P` — go to file
- `⌘B` / `Ctrl+B` — toggle explorer
- `⌘L` / `Ctrl+L` — toggle chat
- `⌘W` / `Ctrl+W` — close tab

```bash
npm run dev
```
