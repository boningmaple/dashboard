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
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    },
  ],
};

const SmoothedLineChart = () => {
  return <ReactECharts echarts={echarts} option={option} />;
};

export default SmoothedLineChart;
