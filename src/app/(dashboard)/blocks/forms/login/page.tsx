import LoginFormClassic from "@/blocks/forms/login/login-form-classic";

export default function Page() {
  return (
    <main className="flex-1 p-4 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">A classic login form</h2>
        <LoginFormClassic />
      </div>
    </main>
  );
}
