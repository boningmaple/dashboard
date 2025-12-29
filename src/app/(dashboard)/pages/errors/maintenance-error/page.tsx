import MaintenanceError from "@/features/errors/maintenance-error";

export default function MainTenanceErrorPage() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <MaintenanceError />
    </main>
  );
}
