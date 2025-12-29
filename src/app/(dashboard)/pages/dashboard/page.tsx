import { getDashboardMetrics } from "@/features/dashboard/api/getDashboardMetrics";
import { getOverviewChartData } from "@/features/dashboard/api/getOverviewChartData";
import Dashboard from "@/features/dashboard/dashboard";

export default async function Page() {
  const [dashboardMetrics, overviewChartData] = await Promise.all([
    getDashboardMetrics(),
    getOverviewChartData(),
  ]);

  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <Dashboard
        dashboardMetrics={dashboardMetrics}
        overviewChartData={overviewChartData}
      />
    </main>
  );
}
