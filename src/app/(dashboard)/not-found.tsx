import NotFoundError from "@/components/blocks/errors/not-found-error";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto justify-center">
      <NotFoundError />
    </main>
  );
}
