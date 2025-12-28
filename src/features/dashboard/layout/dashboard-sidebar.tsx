"use client";

import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
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
    <Sidebar collapsible="icon" {...props}>
      {/*<SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>*/}
      <SidebarContent>
        <DashboardSidebarGroup
          dashboardSidebarGroupData={
            dashboardSidebarData.dashboardSidebarGroups.pagesGroup
          }
        />
        <DashboardSidebarGroup
          dashboardSidebarGroupData={
            dashboardSidebarData.dashboardSidebarGroups.componentsGroup
          }
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
