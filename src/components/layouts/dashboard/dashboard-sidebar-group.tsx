"use client";

import type { Route } from "next";
import Link from "next/link";
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
import type { SidebarGroupData } from "@/types/sidebar-data";

type Props = {
  sidebarGroupData: SidebarGroupData;
};

export function DashboardSidebarGroup({ sidebarGroupData }: Props) {
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{sidebarGroupData.label}</SidebarGroupLabel>
      <SidebarMenu>
        {sidebarGroupData.menu.items.map((menuItem) => (
          <SidebarMenuItem key={menuItem.title}>
            {menuItem.url ? (
              <SidebarMenuButton tooltip={menuItem.title} asChild>
                <Link
                  href={menuItem.url as Route}
                  onClick={() => setOpenMobile(false)}
                >
                  {menuItem.icon && <menuItem.icon />}
                  <span>{menuItem.title}</span>
                </Link>
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton tooltip={menuItem.title}>
                {menuItem.icon && <menuItem.icon />}
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
                      {menuSubItem.icon && <menuSubItem.icon />}
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
