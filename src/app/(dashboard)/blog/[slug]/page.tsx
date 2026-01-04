export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, _frontmatter } = await import(
    `@/contents/${slug}.mdx`
  );

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "less-is-more" }, { slug: "markdown" }];
}

export const dynamicParams = false;
