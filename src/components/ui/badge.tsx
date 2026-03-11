import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const BADGE_VARIANTS = {
  default: "bg-on-surface text-surface",
};

export const BADGE_SIZES = {
  sm: "size-2",
  default: "w-fit min-w-4 min-h-4 px-1",
  icon: "size-4 [&_svg:not([class*='size-'])]:size-4 bg-transparent",
} as const;

const badgeVariants = cva(
  `shrink-0 inline-flex items-center justify-center gap-1 whitespace-nowrap
  text-label-small font-mono font-medium rounded-full outline-none
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
