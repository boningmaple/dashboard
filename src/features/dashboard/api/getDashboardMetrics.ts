export type DashboardMetrics = {
  revenue: string;
  orders: string;
  conversionRate: string;
  refunds: string;
};

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  await new Promise((r) => setTimeout(r, 100));

  // Simulate random failure (20%)
  if (Math.random() < 0) {
    throw new Error("Failed to fetch dashboard metrics");
  }

  const revenue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Math.random() * 100000);

  const orders = new Intl.NumberFormat("en-US").format(
    Math.floor(Math.random() * 10000),
  );

  const conversionRate = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(Math.random());

  const refunds = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Math.random() * 10000);

  return {
    revenue,
    orders,
    conversionRate,
    refunds,
  };
}
