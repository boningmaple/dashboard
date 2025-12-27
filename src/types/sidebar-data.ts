import type IconType from "./icon-type";

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
  Icon?: IconType;
  isActive?: boolean;
  items?: SidebarMenuItemData[];
};
