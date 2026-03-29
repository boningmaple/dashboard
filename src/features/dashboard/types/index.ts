export type DashboardSidebarData = {
  dashboardSidebarGroups: {
    postsGroup: DashboardSidebarGroupData;
    designSystemGroup: DashboardSidebarGroupData;
    componentsGroup: DashboardSidebarGroupData;
    blocksGroup: DashboardSidebarGroupData;
    templatesGroup: DashboardSidebarGroupData;
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
