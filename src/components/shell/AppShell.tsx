"use client";

import { MobileExperience } from "@/components/mobile/MobileExperience";
import { Workbench } from "@/components/workbench/Workbench";

export function AppShell() {
  return (
    <>
      <div className="hidden h-full md:block">
        <Workbench />
      </div>
      <div className="h-full md:hidden">
        <MobileExperience />
      </div>
    </>
  );
}
