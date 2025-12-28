import {
  DollarSignIcon,
  ShoppingCartIcon,
  TicketXIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/features/dashboard/components/metric-card";
import OverviewChart from "@/features/dashboard/components/overview-chart";
import type { getDashboardMetrics } from "./api/getDashboardMetrics";
import type { getOverviewChartData } from "./api/getOverviewChartData";

type Props = {
  dashboardMetrics: Awaited<ReturnType<typeof getDashboardMetrics>>;
  overviewChartData: Awaited<ReturnType<typeof getOverviewChartData>>;
};

export default function Dashboard(props: Props) {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Sales Revenue"
          value={props.dashboardMetrics.revenue}
          description="vs last month"
          delta={{ value: "+14.2%", trend: "up" }}
          Icon={DollarSignIcon}
        />
        <MetricCard
          title="Orders"
          value={props.dashboardMetrics.orders}
          description="increase"
          delta={{ value: "+9.7%", trend: "up" }}
          Icon={ShoppingCartIcon}
        />
        <MetricCard
          title="Sales Conversion"
          value={props.dashboardMetrics.conversionRate}
          description="improvement"
          delta={{ value: "+0.3%", trend: "up" }}
          Icon={TrendingUpIcon}
        />
        <MetricCard
          title="Refunds"
          value={props.dashboardMetrics.refunds}
          description="refund rate"
          delta={{ value: "+1.2%", trend: "down" }}
          Icon={TicketXIcon}
        />
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <OverviewChart data={props.overviewChartData} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
