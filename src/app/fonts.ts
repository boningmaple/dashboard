import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const roboto_serif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

export const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
