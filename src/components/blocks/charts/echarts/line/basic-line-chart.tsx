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
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

const BasicLineChart = () => {
  return <ReactECharts echarts={echarts} option={option} />;
};

export default BasicLineChart;
