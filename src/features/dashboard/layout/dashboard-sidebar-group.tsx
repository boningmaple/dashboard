"use client";

import type { Route } from "next";
import Link from "next/link";
import Icon from "@/components/icon";
import {
  SidebarContextProps,
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
import type {
  DashboardSidebarGroupData,
  DashboardSidebarMenuItemData,
} from "../types";

type Props = {
  dashboardSidebarGroupData: DashboardSidebarGroupData;
};

export function DashboardSidebarGroup({ dashboardSidebarGroupData }: Props) {
  const sidebarController = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{dashboardSidebarGroupData.label}</SidebarGroupLabel>
      <SidebarMenu>
        {dashboardSidebarGroupData.menu.items.map((item) =>
          renderSidebarMenuItem(item, sidebarController),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function renderSidebarMenuItem(
  item: DashboardSidebarMenuItemData,
  sidebarController: SidebarContextProps,
  depth = 0,
) {
  const Item = depth === 0 ? SidebarMenuItem : SidebarMenuSubItem;
  const Sub = SidebarMenuSub;
  const Button = depth === 0 ? SidebarMenuButton : SidebarMenuSubButton;
  const content = (
    <>
      <Icon name={item.icon} />
      <span>{item.title}</span>
    </>
  );

  return (
    <Item key={item.title}>
      {item.url ? (
        <Button tooltip={item.title} asChild>
          <Link
            href={item.url as Route}
            onClick={() => sidebarController.setOpenMobile(false)}
          >
            {content}
          </Link>
        </Button>
      ) : (
        <Button
          tooltip={item.title}
          onClick={() => sidebarController.setOpen(true)}
        >
          {content}
        </Button>
      )}

      {item.items?.length ? (
        <Sub>
          {item.items.map((subMenuItem) =>
            renderSidebarMenuItem(subMenuItem, sidebarController, depth + 1),
          )}
        </Sub>
      ) : null}
    </Item>
  );
}
