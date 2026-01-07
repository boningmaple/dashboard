import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display-small",
        "display-medium",
        "display-large",
        "display-small-emphasized",
        "display-medium-emphasized",
        "display-large-emphasized",
        "headline-small",
        "headline-medium",
        "headline-large",
        "headline-small-emphasized",
        "headline-medium-emphasized",
        "headline-large-emphasized",
        "title-small",
        "title-medium",
        "title-large",
        "title-small-emphasized",
        "title-medium-emphasized",
        "title-large-emphasized",
        "body-small",
        "body-medium",
        "body-large",
        "body-small-emphasized",
        "body-medium-emphasized",
        "body-large-emphasized",
        "label-small",
        "label-medium",
        "label-large",
        "label-small-emphasized",
        "label-medium-emphasized",
        "label-large-emphasized",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
