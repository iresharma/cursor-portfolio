import type { OutlineItem, WorkspaceNode } from "./types";

export const WORKSPACE_NAME = "iresharma";

export const fileTree: WorkspaceNode = {
  id: "root",
  name: WORKSPACE_NAME,
  kind: "folder",
  children: [
    { id: "readme", name: "README.md", kind: "file", language: "markdown" },
    { id: "about", name: "about.md", kind: "file", language: "markdown" },
    { id: "career", name: "career.md", kind: "file", language: "markdown" },
    { id: "projects", name: "projects.ts", kind: "file", language: "typescript" },
    {
      id: "extras",
      name: "extras",
      kind: "folder",
      children: [
        { id: "hobbies", name: "hobbies.md", kind: "file", language: "markdown" },
        { id: "gaming", name: "gaming.md", kind: "file", language: "markdown" },
        { id: "youtube", name: "youtube.md", kind: "file", language: "markdown" },
        { id: "blog", name: "blog.md", kind: "file", language: "markdown" },
      ],
    },
  ],
};

export const outlineItems: OutlineItem[] = [
  {
    id: "post-agents",
    name: "why-agents-read-code-three-ways.md",
    hint: "2026",
  },
  {
    id: "post-venture",
    name: "i-never-finished-venture-deals.md",
    hint: "2026",
  },
  {
    id: "post-shorts",
    name: "youtube-shorts-in-22-seconds.md",
    hint: "2025",
  },
];

export const DEFAULT_OPEN_FILE = "readme";
export const DEFAULT_EXPANDED = ["root", "extras"];
