"use client";

import { useMemo } from "react";
import { FileGlyph } from "@/components/icons/FileGlyph";
import { SidebarRow } from "@/components/explorer/SidebarSection";
import { searchWorkspace } from "@/lib/workspace/queries";
import { useWorkbench } from "@/state/workbench-context";

export function SearchView() {
  const { searchQuery, setSearchQuery, openFile, activeTabId } = useWorkbench();
  const results = useMemo(
    () => searchWorkspace(searchQuery),
    [searchQuery],
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="px-3 pb-2">
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search"
          autoFocus
          className="h-10 w-full rounded-sm border border-line bg-[#2a2a2a] px-3 text-base text-fg outline-none placeholder:text-dim focus:border-accent md:h-7 md:px-2 md:text-[13px]"
        />
      </div>
      <ul className="min-h-0 flex-1 overflow-auto">
        {results.map((item) => {
          const id = item.kind === "file" ? item.node.id : item.item.id;
          const name = item.kind === "file" ? item.node.name : item.item.name;
          return (
            <li key={`${item.kind}-${id}`}>
              <SidebarRow
                depth={0}
                active={activeTabId === id}
                onClick={() => openFile(id)}
                title={name}
              >
                {item.kind === "file" ? (
                  <FileGlyph kind="file" language={item.node.language} />
                ) : (
                  <FileGlyph kind="file" language="markdown" />
                )}
                <span className="truncate">{name}</span>
              </SidebarRow>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
