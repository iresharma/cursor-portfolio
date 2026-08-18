"use client";

import { Hash } from "lucide-react";
import { SidebarRow } from "@/components/explorer/SidebarSection";
import { outlineItems } from "@/lib/workspace/tree";
import { useWorkbench } from "@/state/workbench-context";

export function Outline() {
  const { activeTabId, openFile } = useWorkbench();

  return (
    <ul>
      {outlineItems.map((item) => (
        <li key={item.id}>
          <SidebarRow
            depth={1}
            active={activeTabId === item.id}
            title={item.name}
            onClick={() => openFile(item.id)}
          >
            <Hash className="size-3.5 shrink-0 text-accent" strokeWidth={2} />
            <span className="min-w-0 flex-1 truncate">{item.name}</span>
            <span className="text-[10px] tracking-wide text-dim uppercase">
              {item.hint}
            </span>
          </SidebarRow>
        </li>
      ))}
    </ul>
  );
}
