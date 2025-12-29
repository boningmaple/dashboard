import ForbiddenError from "@/features/errors/forbidden-error";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <ForbiddenError />
    </main>
  );
}
