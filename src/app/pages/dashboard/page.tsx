import { getDashboardMetrics } from "@/features/dashboard/api/getDashboardMetrics";
import { getOverviewChartData } from "@/features/dashboard/api/getOverviewChartData";
import Dashboard from "@/features/dashboard/dashboard";

export default async function Page() {
  const [dashboardMetrics, overviewChartData] = await Promise.all([
    getDashboardMetrics(),
    getOverviewChartData(),
  ]);

  return (
    <Dashboard
      dashboardMetrics={dashboardMetrics}
      overviewChartData={overviewChartData}
    />
  );
}
