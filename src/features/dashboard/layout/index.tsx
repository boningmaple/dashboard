import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { DashboardSidebarData } from "../types";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardHeader from "./header";

type Props = {
  dashboardSidebarData: DashboardSidebarData;
  children: React.ReactNode;
};

export default function DashboardLayout(props: Props) {
  return (
    <SidebarProvider>
      <DashboardSidebar dashboardSidebarData={props.dashboardSidebarData} />
      <SidebarInset>
        <DashboardHeader />
        {props.children}
      </SidebarInset>
    </SidebarProvider>
  );
}
