import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const BADGE_VARIANTS = {
  default: "bg-on-surface text-surface",
  primary: "bg-primary text-on-primary",
  error: "bg-error text-on-error",
  success: "bg-success text-on-success",
  warning: "bg-warning text-on-warning",
};

export const BADGE_SIZES = {
  sm: "w-2 h-2",
  default: "w-fit h-fit min-w-4 min-h-4 px-1",
} as const;

const badgeVariants = cva(
  `shrink-0 inline-flex items-center justify-center gap-1 whitespace-nowrap
  text-label-small font-medium rounded-full outline-none transition-all
  [&>svg]:size-3 [&>svg]:pointer-events-none
  `,
  {
    variants: {
      variant: BADGE_VARIANTS,
      size: BADGE_SIZES,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  const Comp = "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
