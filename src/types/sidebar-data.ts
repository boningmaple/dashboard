import type { LucideIcon } from "lucide-react";

export type SidebarGroupData = {
  label: string;
  menu: SideBarMenuData;
};

export type SideBarMenuData = {
  items: SidebarMenuItemData[];
};

export type SidebarMenuItemData = {
  title: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SidebarMenuItemData[];
};
