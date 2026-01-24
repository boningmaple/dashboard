import { ThemeSwitch } from "@/components/theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardSidebarTrigger from "./sidebar-trigger";

export default function DashboardHeader() {
  return (
    <header className="z-10 rounded-[inherit] bg-surface sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-4">
        <DashboardSidebarTrigger />
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Avatar className="border border-outline-variant">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
            alt="Jack"
          />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
