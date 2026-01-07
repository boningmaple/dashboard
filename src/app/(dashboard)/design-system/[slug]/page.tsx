export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, _frontmatter } = await import(
    `@/features/design-system/pages/${slug}.mdx`
  );

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "color" }, { slug: "component-button" }];
}

export const dynamicParams = false;
