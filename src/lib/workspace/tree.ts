import type { WorkspaceNode } from "./types";

export { outlineItems } from "./outline";

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

export const DEFAULT_OPEN_FILE = "readme";
export const DEFAULT_EXPANDED = ["root", "extras"];
