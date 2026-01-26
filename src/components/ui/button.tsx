import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";
import StateLayer from "@/styles/state-layer";

export const BUTTON_VARIANTS = {
  default: "bg-on-surface text-surface",
  outlined: "text-on-surface border border-outline-variant",
  text: "text-on-surface",
} as const;

export const BUTTON_SIZES = {
  sm: "h-8 px-3",
  default: "h-9 px-4",
  "icon-sm": "size-8",
  icon: "size-9",
} as const;

export const buttonVariants = cva(
  `
  text-label-large font-medium rounded-full outline-none
  inline-flex items-center justify-center gap-2 whitespace-nowrap
  [&_svg]:size-4 [&_svg]:shrink-0
  relative disabled:state-disabled focus-visible:state-focused aria-invalid:outline-error
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

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  if (asChild) {
    return (
      <Slot
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {props.children}
      <StateLayer withRipple={true} />
    </button>
  );
}
