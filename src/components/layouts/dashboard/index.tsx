import { DashboardSidebar } from "@/components/layouts/dashboard/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "./header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
