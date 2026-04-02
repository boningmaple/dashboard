import TanstackTableBasic from "@/components/blocks/tables/tanstack-table/basic";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <div className="markdown">
        <h1>Basic Table</h1>
        <div className="not-markdown">
          <TanstackTableBasic />
        </div>
      </div>
    </main>
  );
}
