import RefererOfAWebsitePieChart from "@/features/blocks/charts/echarts/pie/referer-of-a-website-pie-chart";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <div className="markdown">
        <h1>Pie Charts</h1>
        <h2>Referer of a Website</h2>
        <RefererOfAWebsitePieChart />
      </div>
    </main>
  );
}
