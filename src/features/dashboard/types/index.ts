export type DashboardSidebarData = {
  dashboardSidebarGroups: {
    pagesGroup: DashboardSidebarGroupData;
    blocksGroup: DashboardSidebarGroupData;
    componentsGroup: DashboardSidebarGroupData;
  };
};

export type DashboardSidebarGroupData = {
  label: string;
  menu: DashboardSideBarMenuData;
};

export type DashboardSideBarMenuData = {
  items: DashboardSidebarMenuItemData[];
};

export type DashboardSidebarMenuItemData = {
  title: string;
  url?: string;
  icon?: string;
  isActive?: boolean;
  items?: DashboardSidebarMenuItemData[];
};
