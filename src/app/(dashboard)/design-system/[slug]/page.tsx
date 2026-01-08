import { notFound } from "next/navigation";
import { generatePostStaticParams } from "@/lib/mdx";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { default: Post } = await import(
      `@/features/design-system/pages/${slug}.mdx`
    );
    return <Post />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export async function generateStaticParams() {
  return await generatePostStaticParams("src/features/design-system/pages");
}

export const dynamicParams = false;
