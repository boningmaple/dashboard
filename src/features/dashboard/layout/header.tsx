import { ThemeSwitch } from "@/components/theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DashboardSidebarTrigger from "./sidebar-trigger";

export default function DashboardHeader() {
  return (
    <header className="z-10 rounded-[inherit] bg-surface sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-4">
        <DashboardSidebarTrigger />
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Button variant="text" size="icon" className="text-neutral-900">
          <Avatar className="size-full">
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
}
