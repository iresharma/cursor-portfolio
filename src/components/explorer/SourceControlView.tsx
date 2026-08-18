"use client";

import { FileGlyph } from "@/components/icons/FileGlyph";
import { SidebarRow, SidebarSection } from "@/components/explorer/SidebarSection";
import { useWorkbench } from "@/state/workbench-context";

const changes = [
  { id: "about", name: "about.md", language: "markdown" as const, status: "M" },
  { id: "career", name: "career.md", language: "markdown" as const, status: "M" },
  {
    id: "hobbies",
    name: "extras/hobbies.md",
    language: "markdown" as const,
    status: "M",
  },
  {
    id: "gaming",
    name: "extras/gaming.md",
    language: "markdown" as const,
    status: "U",
  },
];

export function SourceControlView() {
  const { openFile } = useWorkbench();

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-auto">
      <div className="px-3 pb-2 text-[12px] text-muted">
        <p>
          <span className="text-fg">main</span>
          <span className="text-dim"> · 2 years ahead of origin/linkedin</span>
        </p>
      </div>
      <SidebarSection title="Changes">
        <ul>
          {changes.map((change) => (
            <li key={change.id}>
              <SidebarRow depth={0} onClick={() => openFile(change.id)} title={change.name}>
                <FileGlyph kind="file" language={change.language} />
                <span className="min-w-0 flex-1 truncate">{change.name}</span>
                <span className="font-mono text-[11px] text-warning">
                  {change.status}
                </span>
              </SidebarRow>
            </li>
          ))}
        </ul>
      </SidebarSection>
    </div>
  );
}
