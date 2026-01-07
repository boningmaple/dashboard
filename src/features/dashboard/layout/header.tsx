import { ThemeSwitch } from "@/components/theme-switch";
import DashboardSidebarTrigger from "./sidebar-trigger";

export default function DashboardHeader() {
  return (
    <header className="z-10 rounded-[inherit] bg-surface sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2">
        <DashboardSidebarTrigger />
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitch />
      </div>
    </header>
  );
}
