"use client";

import type * as React from "react";
import { DashboardSidebarGroup } from "@/components/layouts/dashboard/dashboard-sidebar-group";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import dashboardSidebarData from "@/data/dashboard-sidebar-data";

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/*<SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>*/}
      <SidebarContent>
        <DashboardSidebarGroup
          sidebarGroupData={dashboardSidebarData.sidebarGroups.blocksGroup}
        />
        <DashboardSidebarGroup
          sidebarGroupData={dashboardSidebarData.sidebarGroups.componentsGroup}
        />
        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
      {/*<SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>*/}
    </Sidebar>
  );
}
