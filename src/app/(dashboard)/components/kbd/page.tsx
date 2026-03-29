import Demo from "@/components/demos/kbd-demo";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <div className="markdown">
        <h1>Keyboard Key</h1>
        <Demo />
      </div>
    </main>
  );
}
