import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const BUTTON_VARIANTS = {
  default:
    "bg-on-surface text-surface hover:bg-on-surface/85 active:bg-on-surface/70",
  primary:
    "bg-primary text-on-primary hover:bg-primary/85 active:bg-primary/70",
  outlined:
    "text-on-surface-variant border border-outline-variant hover:bg-surface-variant/25 active:bg-surface-variant/50",
  text: "text-on-surface hover:bg-surface-variant/25 active:bg-surface-variant/50",
  link: "text-on-surface underline-offset-4 hover:underline active:underline active:decoration-2",
  error: "bg-error text-on-error hover:bg-error/80 active:bg-error/75",
  success:
    "bg-success text-on-success hover:bg-success/80 active:bg-success/75",
  warning:
    "bg-warning text-on-warning hover:bg-warning/80 active:bg-warning/75",
} as const;

export const BUTTON_SIZES = {
  xs: "h-8 px-3 [&_svg:not([class*='size-'])]:size-4",
  sm: "h-10 px-4",
  md: "h-14 px-6 text-body-large [&_svg:not([class*='size-'])]:size-6",
  "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-4",
  "icon-sm": "size-10",
  "icon-md": "size-14 [&_svg:not([class*='size-'])]:size-6",
} as const;

const buttonVariants = cva(
  `
  shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap
  text-label-large font-medium rounded-full outline-none transition-all
  disabled:bg-on-surface/10 disabled:text-on-surface/38 disabled:pointer-events-none
  focus-visible:ring-3 focus-visible:ring-outline/50 aria-invalid:ring-error/50
  active:rounded-small
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: BUTTON_VARIANTS,
      size: BUTTON_SIZES,
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "sm",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
