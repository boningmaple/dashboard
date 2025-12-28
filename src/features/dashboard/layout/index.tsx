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
        <main className="flex-1 flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto">
          {props.children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
