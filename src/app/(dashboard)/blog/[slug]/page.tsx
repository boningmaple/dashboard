export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, _frontmatter } = await import(
    `@/contents/${slug}.mdx`
  );

  return (
    <main className="flex-1 p-4 w-full max-w-7xl flex flex-col">
      <article className="flex-1">
        <Post />
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return [{ slug: "less-is-more" }];
}

export const dynamicParams = false;
