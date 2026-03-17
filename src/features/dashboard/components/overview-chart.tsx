"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { OverviewChartItem } from "../api/getOverviewChartData";

export default function OverviewChart({ data }: { data: OverviewChartItem[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value / 1000}k`}
        />
        <Tooltip
          cursor={{ fill: "var(--color-surface-container-high)" }}
          contentStyle={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-outline)",
            borderRadius: "8px",
            color: "var(--color-on-surface)",
          }}
          labelStyle={{
            color: "var(--color-on-surface)",
          }}
        />
        <Bar
          dataKey="revenue"
          fill="var(--color-on-surface)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
