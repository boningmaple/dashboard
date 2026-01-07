import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const BUTTON_VARIANTS = {
  default:
    "bg-on-surface text-surface hover:bg-on-surface/85 active:bg-on-surface/70",
  primary:
    "bg-primary text-on-primary hover:bg-primary/85 active:bg-primary/70",
  outline:
    "bg-surface text-on-surface border border-outline-variant shadow-xs hover:bg-surface-variant/25 active:bg-surface-variant/50",
  text: "bg-surface text-on-surface hover:bg-surface-variant/25 active:bg-surface-variant/50",
  link: "bg-surface text-on-surface underline-offset-4 hover:underline active:underline active:decoration-2",
  error: "bg-error text-white hover:bg-error/80 active:bg-error/75",
  success: "bg-success text-white hover:bg-success/80 active:bg-success/75",
  warning: "bg-warning text-white hover:bg-warning/80 active:bg-warning/75",
} as const;

export const BUTTON_SIZES = {
  sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  lg: "h-10 px-6 has-[>svg]:px-4",
  "icon-sm": "size-8",
  icon: "size-9",
  "icon-lg": "size-10",
} as const;

const buttonVariants = cva(
  `
  shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap
  text-body-medium rounded-md outline-none transition-all
  disabled:bg-on-surface/10 disabled:text-on-surface/38 disabled:pointer-events-none
  focus-visible:ring-3 focus-visible:ring-outline/50 aria-invalid:ring-error/50
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: BUTTON_VARIANTS,
      size: BUTTON_SIZES,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
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
