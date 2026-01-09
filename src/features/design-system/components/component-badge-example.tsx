import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BADGE_VARIANTS, Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
      <h2>On Avatar</h2>
      <div className="flex items-center gap-6">
        {/* Dot badge */}
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge
            size="sm"
            variant="success"
            className="absolute -top-0.5 -right-0.5"
          />
        </div>
        {/* Count badge */}
        {BADGE_COUNTS.map((count) => (
          <div key={count} className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge
              variant="error"
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
            >
              {count}
            </Badge>
          </div>
        ))}
      </div>
      <h2>With Outline Ring on Avatar</h2>
      <div className="flex items-center gap-6">
        {/* Dot badge */}
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge
            size="sm"
            variant="success"
            className="absolute -bottom-0.5 -right-0.5 ring-2 ring-surface"
          />
        </div>
        {/* Count badge */}
        {BADGE_COUNTS.map((count) => (
          <div key={count} className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge
              variant="error"
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 ring-2 ring-surface"
            >
              {count}
            </Badge>
          </div>
        ))}
      </div>
      <h2>On Icon Button</h2>
      <div className="flex items-center gap-6">
        {BADGE_COUNTS.map((count) => (
          <div key={count} className="relative">
            <Button variant="text" size="icon-xs" className="rounded-full">
              <BellIcon />
            </Button>
            <Badge
              variant="error"
              className="absolute top-0 right-0 translate-x-1/2"
            >
              {count}
            </Badge>
          </div>
        ))}
      </div>
    </>
  );
}
