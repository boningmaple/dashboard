/** biome-ignore-all lint/suspicious/noArrayIndexKey: This is a example */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AvatarExample() {
  return (
    <>
      <h2>Sizes</h2>
      <div className="flex items-center gap-4">
        <Avatar className="size-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h2>With Badge</h2>
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
        {["4", "32", "999+"].map((count) => (
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
      <h2>With Outline Ring around Badge</h2>
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
        {["4", "32", "999+"].map((count) => (
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
      <h2>Group</h2>
      <div className="flex -space-x-2 items-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <Avatar key={i} className="size-8 ring-2 ring-surface">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <h2>Group with Count</h2>
      <div className="flex -space-x-2 items-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <Avatar key={i} className="size-8 ring-2 ring-surface">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
        <div className="relative">
          <Avatar className="size-8 ring-2 ring-surface">
            <AvatarFallback>+9</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
