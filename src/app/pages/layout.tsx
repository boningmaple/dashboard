import getDashboardSidebarData from "@/features/dashboard/api/getDashboardSidebarData";
import DashboardLayout from "@/features/dashboard/layout";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dashboardSidebarData = await getDashboardSidebarData();
  return (
    <DashboardLayout dashboardSidebarData={dashboardSidebarData}>
      {children}
    </DashboardLayout>
  );
}
