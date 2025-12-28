export type OverviewChartItem = {
  month: string;
  revenue: number;
};

export async function getOverviewChartData(): Promise<OverviewChartItem[]> {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 150));

  // Simulate failure if you want (currently disabled)
  if (Math.random() < 0) {
    throw new Error("Failed to fetch overview chart data");
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months.map((month) => ({
    month,
    revenue: Math.floor(30000 + Math.random() * 70000),
  }));
}
