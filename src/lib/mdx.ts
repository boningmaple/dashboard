import fs from "node:fs/promises";
import path from "node:path";

export async function generatePostStaticParams(postsDir: string) {
  const files = await fs.readdir(path.join(process.cwd(), postsDir));

  const slugs = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return slug;
    });

  const staticParams = slugs.map((slug) => ({ slug }));
  return staticParams;
}
