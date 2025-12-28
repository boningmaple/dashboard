"use client";

import type { Route } from "next";
import Link from "next/link";
import Icon from "@/components/icon";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type { DashboardSidebarGroupData } from "../types";

type Props = {
  dashboardSidebarGroupData: DashboardSidebarGroupData;
};

export function DashboardSidebarGroup({ dashboardSidebarGroupData }: Props) {
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{dashboardSidebarGroupData.label}</SidebarGroupLabel>
      <SidebarMenu>
        {dashboardSidebarGroupData.menu.items.map((menuItem) => (
          <SidebarMenuItem key={menuItem.title}>
            {menuItem.url ? (
              <SidebarMenuButton tooltip={menuItem.title} asChild>
                <Link
                  href={menuItem.url as Route}
                  onClick={() => setOpenMobile(false)}
                >
                  <Icon name={menuItem.icon} />
                  <span>{menuItem.title}</span>
                </Link>
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton tooltip={menuItem.title}>
                <Icon name={menuItem.icon} />
                <span>{menuItem.title}</span>
              </SidebarMenuButton>
            )}
            <SidebarMenuSub>
              {menuItem.items?.map((menuSubItem) => (
                <SidebarMenuSubItem key={menuSubItem.title}>
                  <SidebarMenuSubButton asChild>
                    <Link
                      href={menuSubItem.url as Route}
                      onClick={() => setOpenMobile(false)}
                    >
                      <Icon name={menuSubItem.icon} />
                      <span>{menuSubItem.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
