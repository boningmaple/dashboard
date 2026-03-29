import BasicAreaChart from "@/components/blocks/charts/echarts/line/basic-area-chart";
import BasicLineChart from "@/components/blocks/charts/echarts/line/basic-line-chart";
import SmoothedLineChart from "@/components/blocks/charts/echarts/line/smoothed-line-chart";
import StackedLineChart from "@/components/blocks/charts/echarts/line/stacked-line-chart";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <div className="markdown">
        <h1>Line Charts</h1>
        <h2>Basic Line Chart</h2>
        <BasicLineChart />
        <h2>Smoothed Line Chart</h2>
        <SmoothedLineChart />
        <h2>Basic Area Chart</h2>
        <BasicAreaChart />
        <h2>Stacked Line Chart</h2>
        <StackedLineChart />
      </div>
    </main>
  );
}
