"use client";

import ReactECharts from "echarts-for-react";
import echarts from "@/lib/echarts";

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const BasicBarChart = () => {
  return <ReactECharts echarts={echarts} option={option} />;
};

export default BasicBarChart;
