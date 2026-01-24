import { BellIcon, ShoppingCartIcon, StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BADGE_COUNTS = ["1", "19", "99", "999+"] as const;

export default function BadgeExample() {
  return (
    <>
      <h2>Basic</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center flex-wrap">
          <Badge size="sm" />
          {BADGE_COUNTS.map((count) => (
            <Badge key={count} size="default">
              {count}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge size="sm" className="bg-info" />
          {BADGE_COUNTS.map((count) => (
            <Badge key={count} className="bg-info text-on-info">
              {count}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge size="sm" className="bg-success" />
          {BADGE_COUNTS.map((count) => (
            <Badge key={count} className="bg-success text-on-success">
              {count}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge size="sm" className="bg-warning" />
          {BADGE_COUNTS.map((count) => (
            <Badge key={count} className="bg-warning text-on-warning">
              {count}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge size="sm" className="bg-error" />
          {BADGE_COUNTS.map((count) => (
            <Badge key={count} className="bg-error text-on-error">
              {count}
            </Badge>
          ))}
        </div>
        <Badge className="bg-info/10 text-info px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-info" /> information
        </Badge>
        <Badge className="bg-success/10 text-success px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-success" /> Completed
        </Badge>
        <Badge className="bg-warning/10 text-warning px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-warning" /> In Progress
        </Badge>
        <Badge className="bg-error/10 text-error px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-error" /> Blocked
        </Badge>
        <Badge className="bg-info-container text-info px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-info" /> information
        </Badge>
        <Badge className="bg-success-container text-success px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-success" /> Completed
        </Badge>
        <Badge className="bg-warning-container text-warning px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-warning" /> In Progress
        </Badge>
        <Badge className="bg-error-container text-error px-2 py-0.5">
          <Badge size="sm" className="size-1.5 bg-error" /> Blocked
        </Badge>
      </div>
      <h2>With Icon</h2>
      <div className="flex gap-4 items-center flex-wrap mb-4">
        <Badge className="px-2 py-0.5">
          <StarIcon className="fill-surface" /> With Icon
        </Badge>
        <Badge className="px-2 py-0.5 bg-info text-on-info">
          <StarIcon className="fill-on-info" /> With Icon
        </Badge>
        <Badge className="px-2 py-0.5 bg-success text-on-success">
          <StarIcon className="fill-on-success" /> With Icon
        </Badge>
        <Badge className="px-2 py-0.5 bg-warning text-on-warning">
          <StarIcon className="fill-on-warning" /> With Icon
        </Badge>
        <Badge className="px-2 py-0.5 bg-error text-on-error">
          <StarIcon className="fill-on-error" /> With Icon
        </Badge>
      </div>
      <div className="flex gap-4 items-center flex-wrap">
        <Badge className="rounded-sm px-2 py-0.5 bg-transparent text-on-surface border border-outline-variant">
          <StarIcon /> With Icon
        </Badge>
        <Badge className="rounded-sm px-2 py-0.5 bg-transparent text-info border border-info">
          <StarIcon /> With Icon
        </Badge>
        <Badge className="rounded-sm px-2 py-0.5 bg-transparent text-success border border-success">
          <StarIcon /> With Icon
        </Badge>
        <Badge className="rounded-sm px-2 py-0.5 bg-transparent text-warning border border-warning">
          <StarIcon /> With Icon
        </Badge>
        <Badge className="rounded-sm px-2 py-0.5 bg-transparent text-error border border-error">
          <StarIcon /> With Icon
        </Badge>
      </div>
      <h2>On Avatar</h2>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge
            size="sm"
            className="bg-success absolute -bottom-0.5 -right-0.5"
          />
        </div>
        {BADGE_COUNTS.map((count) => (
          <div key={count} className="relative">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge className="bg-error text-on-error absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              {count}
            </Badge>
          </div>
        ))}
      </div>
      <h2>With Outline Ring on Avatar</h2>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge
            size="sm"
            className="bg-success absolute -bottom-0.5 -right-0.5 ring-2 ring-surface"
          />
        </div>
        {BADGE_COUNTS.map((count) => (
          <div key={count} className="relative">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge className="bg-error text-on-error absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 ring-2 ring-surface">
              {count}
            </Badge>
          </div>
        ))}
      </div>
      <h2>On Icon Button</h2>
      <div className="flex items-center gap-6 mb-4">
        {BADGE_COUNTS.map((count) => (
          <div key={count} className="relative">
            <Button variant="text" size="icon-sm">
              <BellIcon />
            </Button>
            <Badge className="bg-error text-on-error absolute top-0 right-0 translate-x-1/3 -translate-y-1/5 ring-2 ring-surface">
              {count}
            </Badge>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 mb-4">
        {BADGE_COUNTS.map((count) => (
          <div key={count} className="relative">
            <Button variant="elevated" size="icon-sm">
              <ShoppingCartIcon />
            </Button>
            <Badge className="bg-success text-on-success absolute top-0 right-0 translate-x-1/3 -translate-y-1/5 ring-2 ring-surface">
              {count}
            </Badge>
          </div>
        ))}
      </div>
    </>
  );
}
