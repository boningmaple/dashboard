import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { default: Post, _frontmatter } = await import(
      `@/contents/${slug}.mdx`
    );
    return <Post />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export function generateStaticParams() {
  return [{ slug: "less-is-more" }, { slug: "markdown" }];
}

export const dynamicParams = false;
