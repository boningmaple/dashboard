export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1 p-4 w-full max-w-7xl mx-auto">
      <article className="markdown">{children}</article>
    </main>
  );
}
