import {
  DollarSignIcon,
  ShoppingCartIcon,
  TicketXIcon,
  TrendingUpIcon,
} from "lucide-react";
import { getDashboardMetrics, getOverviewChartData } from "@/api";
import { MetricCard } from "@/components/dashboard/metric-card";
import OverviewChart from "@/components/dashboard/overview-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const [{ revenue, orders, conversionRate, refunds }, overviewChartData] =
    await Promise.all([getDashboardMetrics(), getOverviewChartData()]);

  return (
    <>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Sales Revenue"
          value={revenue}
          description="vs last month"
          delta={{ value: "+14.2%", trend: "up" }}
          Icon={DollarSignIcon}
        />
        <MetricCard
          title="Orders"
          value={orders}
          description="increase"
          delta={{ value: "+9.7%", trend: "up" }}
          Icon={ShoppingCartIcon}
        />
        <MetricCard
          title="Sales Conversion"
          value={conversionRate}
          description="improvement"
          delta={{ value: "+0.3%", trend: "up" }}
          Icon={TrendingUpIcon}
        />
        <MetricCard
          title="Refunds"
          value={refunds}
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
            <OverviewChart data={overviewChartData} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
