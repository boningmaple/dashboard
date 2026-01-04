import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  typedRoutes: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "frontmatter" }],
      ["remark-gfm", {}],
      "remark-github-blockquote-alert",
      "remark-math",
      ["remark-rehype", { footnoteLabelProperties: { className: [] } }],
    ],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "wrap" }],
      "rehype-katex",
      [
        "@shikijs/rehype",
        {
          theme: "github-dark-dimmed",
          defaultLanguage: "text",
          fallbackLanguage: "text",
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
