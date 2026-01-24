import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const ALERT_VARIANTS = {
  filled: "bg-on-surface text-surface",
  outlined: "bg-surface text-on-surface border border-outline-variant",
} as const;

const alertVariants = cva(
  `
  text-body-medium w-full rounded-lg px-4 py-3
  grid grid-cols-[0_1fr] gap-y-0.5 items-start
  has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3
  [&>svg]:size-4 [&>svg]:self-center
  `,
  {
    variants: {
      variant: ALERT_VARIANTS,
    },
    defaultVariants: {
      variant: "filled",
    },
  },
);

export function Alert({
  className,
  variant = "filled",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export function AlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 font-medium", className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("col-start-2", className)}
      {...props}
    />
  );
}
