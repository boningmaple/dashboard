import { cookies } from "next/headers";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { DashboardSidebarData } from "../types";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardHeader from "./header";

type Props = {
  dashboardSidebarData: DashboardSidebarData;
  children: React.ReactNode;
};

export default async function DashboardLayout(props: Props) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar dashboardSidebarData={props.dashboardSidebarData} />
      <SidebarInset>
        <DashboardHeader />
        {props.children}
      </SidebarInset>
    </SidebarProvider>
  );
}
