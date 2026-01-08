import { BADGE_VARIANTS, Badge } from "@/components/ui/badge";

type BadgeVariant = keyof typeof BADGE_VARIANTS;
const BADGE_COUNTS = ["1", "19", "99", "999+"] as const;

export default function BadgeExample() {
  return (
    <>
      <h2>Variants</h2>
      <div className="flex gap-x-8 flex-wrap">
        {Object.keys(BADGE_VARIANTS).map((variant) => (
          <div key={variant}>
            <h3>{variant[0].toUpperCase() + variant.slice(1)}</h3>
            <div className="flex gap-4 items-center flex-wrap">
              {/* Small badge – dot only */}
              <Badge variant={variant as BadgeVariant} size="sm" />

              {/* Default badge – counts */}
              {BADGE_COUNTS.map((count) => (
                <Badge
                  key={count}
                  variant={variant as BadgeVariant}
                  size="default"
                >
                  {count}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
