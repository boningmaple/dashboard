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
import type {
  DashboardSidebarGroupData,
  DashboardSidebarMenuItemData,
} from "../types";

type Props = {
  dashboardSidebarGroupData: DashboardSidebarGroupData;
};

export function DashboardSidebarGroup({ dashboardSidebarGroupData }: Props) {
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{dashboardSidebarGroupData.label}</SidebarGroupLabel>
      <SidebarMenu>
        {dashboardSidebarGroupData.menu.items.map((item) =>
          renderSidebarMenuItem(item, setOpenMobile),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function renderSidebarMenuItem(
  item: DashboardSidebarMenuItemData,
  setOpenMobile: (open: boolean) => void,
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
  const handleClick = () => {
    setOpenMobile(false);
  };

  return (
    <Item key={item.title}>
      {item.url ? (
        <Button tooltip={item.title} asChild>
          <Link href={item.url as Route} onClick={handleClick}>
            {content}
          </Link>
        </Button>
      ) : (
        <Button tooltip={item.title}>{content}</Button>
      )}

      {item.items?.length ? (
        <Sub>
          {item.items.map((subMenuItem) =>
            renderSidebarMenuItem(subMenuItem, handleClick, depth + 1),
          )}
        </Sub>
      ) : null}
    </Item>
  );
}
