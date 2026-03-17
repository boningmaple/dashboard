// Import ECharts.js modules manually to reduce bundle size
import { BarChart, LineChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import * as echartsCore from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

// Register the required components
echartsCore.use([
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
]);

const echarts = echartsCore;

export default echarts;
