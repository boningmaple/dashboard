import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";
import Ripple from "@/styles/ripple";

export const BUTTON_VARIANTS = {
  filled: "bg-on-surface text-surface",
  elevated: "bg-surface-container-lowest text-on-surface shadow-1",
  tonal: "bg-secondary-container text-on-secondary-container",
  outlined: "text-on-surface-variant border border-outline-variant",
  text: "text-on-surface",
} as const;

export const BUTTON_SIZES = {
  xs: "h-8 px-3 [&_svg:not([class*='size-'])]:size-4",
  sm: "h-10 px-4",
  md: "h-14 px-6 text-body-large [&_svg:not([class*='size-'])]:size-6",
  "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-4",
  "icon-sm": "size-10",
  "icon-md": "size-14 [&_svg:not([class*='size-'])]:size-6",
} as const;

export const BUTTON_TOGGLE = {
  default: "",
  unselected: "",
  selected: "rounded-md",
} as const;

export const buttonVariants = cva(
  `
  shrink-0 text-label-large font-medium rounded-full outline-none
  inline-flex items-center justify-center gap-2 whitespace-nowrap
  state-layer disabled:state-disabled hover:state-hovered
  focus-visible:state-focused aria-invalid:outline-error
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: BUTTON_VARIANTS,
      size: BUTTON_SIZES,
      toggle: BUTTON_TOGGLE,
    },
    compoundVariants: [
      {
        variant: "filled",
        toggle: "unselected",
        className: "bg-surface-container text-on-surface-variant",
      },
      {
        variant: "elevated",
        toggle: "selected",
        className: "bg-inverse-surface text-inverse-on-surface",
      },
      {
        variant: "tonal",
        toggle: "selected",
        className: "bg-secondary text-on-secondary",
      },
      {
        variant: "outlined",
        toggle: "selected",
        className: "bg-inverse-surface text-inverse-on-surface",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "sm",
      toggle: "default",
    },
  },
);

export function Button({
  className,
  variant = "filled",
  size = "sm",
  toggle = "default",
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
        data-toggle={toggle}
        className={cn(buttonVariants({ variant, size, toggle, className }))}
        {...props}
      />
    );
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-toggle={toggle}
      className={cn(buttonVariants({ variant, size, toggle, className }))}
      {...props}
    >
      {props.children}
      <Ripple />
    </button>
  );
}
