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
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: "Page C",
    uv: 320,
    pv: 1398,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: "Page E",
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: "Page F",
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

export const LineChartDemo = () => {
  return (
    <LineChart
      style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
    >
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="purple"
        strokeWidth={2}
        name="My data series name"
      />
      <XAxis dataKey="name" />
      <YAxis
        width="auto"
        label={{ value: "UV", position: "insideLeft", angle: -90 }}
      />
      <Tooltip />
      <Legend align="right" />
      <RechartsDevtools />
    </LineChart>
  );
};
