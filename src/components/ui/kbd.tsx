import { cn } from "@/lib/utils";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        `font-mono text-body-small bg-surface-container text-on-surface-variant
        h-5 w-fit min-w-5 rounded-sm px-1
        inline-flex items-center justify-center gap-1
        pointer-events-none select-none
        [&_svg:not([class*='size-'])]:size-3
        in-data-[slot=tooltip-content]:bg-surface/20
        in-data-[slot=tooltip-content]:text-surface
        dark:in-data-[slot=tooltip-content]:bg-surface/10`,
        className,
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn(
        "inline-flex items-center gap-1 font-mono text-body-small",
        className,
      )}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
