export type DashboardSidebarData = {
  dashboardSidebarGroups: {
    blogGroup: DashboardSidebarGroupData;
    designSystemGroup: DashboardSidebarGroupData;
    pagesGroup: DashboardSidebarGroupData;
    blocksGroup: DashboardSidebarGroupData;
  };
};

export type DashboardSidebarGroupData = {
  label?: string;
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
