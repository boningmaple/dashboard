"use client";

import { ChevronRightIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/icon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  type SidebarContextProps,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
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
  const sidebarContext = useSidebar();
  const pathname = usePathname();

  return (
    <SidebarGroup>
      {dashboardSidebarGroupData.label && (
        <SidebarGroupLabel>{dashboardSidebarGroupData.label}</SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {dashboardSidebarGroupData.menu.items.map((item) => (
            <Tree
              key={item.title}
              item={item}
              sidebarContext={sidebarContext}
              pathname={pathname}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

type TreeProps = {
  item: DashboardSidebarMenuItemData;
  sidebarContext: SidebarContextProps;
  pathname: string;
};

function Tree({ item, sidebarContext, pathname }: TreeProps) {
  const hasActiveItem = checkIfHasActiveItem(item, pathname);

  if (!item.items?.length) {
    return (
      <div className="mr-6">
        <SidebarMenuButton
          tooltip={item.title}
          asChild
          isActive={hasActiveItem}
          onClick={() => sidebarContext.setOpenMobile(false)}
        >
          <Link href={item.url as Route}>
            <Icon name={item.icon} />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </div>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:last-child]:rotate-90"
        defaultOpen={hasActiveItem}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            onClick={(e) => {
              if (sidebarContext.state === "collapsed") {
                e.preventDefault();
                e.stopPropagation();
                sidebarContext.setOpen(true);
              }
            }}
          >
            <Icon name={item.icon} />
            <span>{item.title}</span>
            <ChevronRightIcon className="ml-auto transition-transform" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="mr-0 pr-px">
            {item.items?.map((subItem) => (
              <Tree
                key={subItem.title}
                item={subItem}
                sidebarContext={sidebarContext}
                pathname={pathname}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

function checkIfHasActiveItem(
  item: DashboardSidebarMenuItemData,
  pathname: string,
): boolean {
  if (item.url === pathname) return true;

  return (
    item.items?.some((child) => checkIfHasActiveItem(child, pathname)) ?? false
  );
}
