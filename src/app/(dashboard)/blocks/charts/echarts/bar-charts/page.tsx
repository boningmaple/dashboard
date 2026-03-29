import BasicBarChart from "@/components/blocks/charts/echarts/bar/basic-bar-chart";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <div className="markdown">
        <h1>Bar Charts</h1>
        <h2>Basic Bar Chart</h2>
        <BasicBarChart />
      </div>
    </main>
  );
}
