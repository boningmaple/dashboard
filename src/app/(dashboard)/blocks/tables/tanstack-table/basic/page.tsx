import BasicTable from "@/components/blocks/tables/tanstack-table/basic-table";
import { data } from "@/components/blocks/tables/tanstack-table/basic-table-data";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <div className="markdown">
        <h1>Basic Table</h1>
        <h2>Electric Bill Table</h2>
        <div className="not-markdown">
          <BasicTable data={data} />
        </div>
      </div>
    </main>
  );
}
