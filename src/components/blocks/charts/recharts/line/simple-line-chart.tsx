"use client";

import { RechartsDevtools } from "@recharts/devtools";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SimpleLineChart = () => {
  return (
    <LineChart
      style={{
        width: "100%",
        height: "300px",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-outline)" />
      <XAxis dataKey="name" stroke="var(--color-on-surface)" />
      <YAxis stroke="var(--color-on-surface)" />
      <Tooltip
        cursor={{ stroke: "var(--color-on-surface)" }}
        contentStyle={{ backgroundColor: "var(--color-surface-container)" }}
      />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="var(--color-blue-500)" />
      <Line type="monotone" dataKey="uv" stroke="var(--color-green-500)" />
      <RechartsDevtools />
    </LineChart>
  );
};

export default SimpleLineChart;
