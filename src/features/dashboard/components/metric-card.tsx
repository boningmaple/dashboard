import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type IconType from "@/types/icon-type";

type MetricCardProps = {
  title: string;
  value: string | number;
  description?: string;
  delta?: {
    value: string;
    trend?: "up" | "down" | "neutral";
  };
  Icon?: IconType;
};

export function MetricCard({
  title,
  value,
  description,
  delta,
  Icon,
}: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium min-w-0 truncate">
          {title}
        </CardTitle>
        {Icon && (
          <Icon
            aria-hidden
            className="w-4 h-4 shrink-0 text-muted-foreground"
          />
        )}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">{value}</div>

        {(delta || description) && (
          <p className="text-xs text-muted-foreground">
            {delta && (
              <span
                className={cn(
                  "font-medium",
                  delta.trend === "up" && "text-emerald-600",
                  delta.trend === "down" && "text-red-600",
                )}
              >
                {delta.value}
              </span>
            )}
            {delta && description && " "}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
