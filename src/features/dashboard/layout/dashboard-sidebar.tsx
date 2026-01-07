"use client";

import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import type { DashboardSidebarData } from "../types";
import { DashboardSidebarGroup } from "./dashboard-sidebar-group";

type Props = React.ComponentProps<typeof Sidebar> & {
  dashboardSidebarData: DashboardSidebarData;
};

export default function DashboardSidebar({
  dashboardSidebarData,
  ...props
}: Props) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarContent>
        <DashboardSidebarGroup
          dashboardSidebarGroupData={
            dashboardSidebarData.dashboardSidebarGroups.blogGroup
          }
        />
        <SidebarSeparator className="mx-0" />
        <DashboardSidebarGroup
          dashboardSidebarGroupData={
            dashboardSidebarData.dashboardSidebarGroups.designSystemGroup
          }
        />
        <SidebarSeparator className="mx-0" />
        <DashboardSidebarGroup
          dashboardSidebarGroupData={
            dashboardSidebarData.dashboardSidebarGroups.pagesGroup
          }
        />
        <SidebarSeparator className="mx-0" />
        <DashboardSidebarGroup
          dashboardSidebarGroupData={
            dashboardSidebarData.dashboardSidebarGroups.blocksGroup
          }
        />
        <SidebarSeparator className="mx-0" />
        <DashboardSidebarGroup
          dashboardSidebarGroupData={
            dashboardSidebarData.dashboardSidebarGroups.componentsGroup
          }
        />
      </SidebarContent>
    </Sidebar>
  );
}
