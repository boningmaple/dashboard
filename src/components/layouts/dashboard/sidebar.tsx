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
          sidebarGroupData={dashboardSidebarData.sidebarGroups.dashboardGroup}
        />
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
        </SidebarGroup>
        <DashboardSidebarGroup
          sidebarGroupData={dashboardSidebarData.sidebarGroups.pagesGroup}
        />
        <SidebarGroup>
          <SidebarGroupLabel>{"Forms & Tables"}</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>{"Charts & Map"}</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
        </SidebarGroup>
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
