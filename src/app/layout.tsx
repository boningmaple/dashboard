import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { roboto, roboto_mono, roboto_serif } from "./fonts";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A silly dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        />
      </head>
      <body
        className={`${roboto.variable} ${roboto_serif.variable} ${roboto_mono.variable}`}
      >
        <ThemeProvider>
          <NextTopLoader color="var(--color-muted-foreground)" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
