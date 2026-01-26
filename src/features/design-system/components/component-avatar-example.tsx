import { BadgeCheckIcon, CircleCheckIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AvatarExample() {
  return (
    <>
      <Avatar>
        <AvatarImage
          src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
          alt="Jack"
        />
        <AvatarFallback>J</AvatarFallback>
      </Avatar>
      <h2>With Badge</h2>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge size="sm" className="bg-success absolute bottom-0 right-0" />
        </div>
        <div className="relative">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge size="icon" className="absolute -top-1.5 -right-1.5">
            <BadgeCheckIcon className="fill-sky-500" />
          </Badge>
        </div>
        {["4", "32", "999+"].map((count) => (
          <div key={count} className="relative">
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
                alt="Jack"
              />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <Badge className="bg-error text-on-error absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              {count}
            </Badge>
          </div>
        ))}
      </div>
      <h2>With Outline Ring around Badge</h2>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge
            size="sm"
            className="bg-success absolute bottom-0 right-0 ring-2 ring-surface"
          />
        </div>
        <div className="relative">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge
            size="icon"
            className="bg-surface absolute -top-1.5 -right-1.5"
          >
            <BadgeCheckIcon className="fill-sky-500" />
          </Badge>
        </div>
        {["4", "32", "999+"].map((count) => (
          <div key={count} className="relative">
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
                alt="Jack"
              />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <Badge className="bg-error text-on-error absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 ring-2 ring-surface">
              {count}
            </Badge>
          </div>
        ))}
      </div>
      <h2>With Outline and Badge</h2>
      <div className="flex flex-wrap gap-6">
        <div className="relative">
          <Avatar className="outline-2 outline-error outline-offset-2">
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge className="bg-error text-on-error absolute top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Live
          </Badge>
        </div>
        <div className="relative">
          <Avatar className="outline-2 outline-success outline-offset-2">
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge
            size="icon"
            className="bg-surface absolute -bottom-1.5 -right-1.5"
          >
            <CircleCheckIcon className="fill-success" />
          </Badge>
        </div>
      </div>
      <h2>Avatar Button</h2>
      <div className="flex flex-wrap gap-6">
        <Button variant="text" size="icon" className="text-neutral-900">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
        </Button>
        <Button variant="text" size="icon" className="text-neutral-900">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge
            size="sm"
            className="bg-success absolute bottom-0 right-0 ring-2 ring-surface"
          />
        </Button>
        <Button variant="text" size="icon" className="text-neutral-900">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge
            size="icon"
            className="bg-surface absolute -top-1.5 -right-1.5"
          >
            <BadgeCheckIcon className="fill-sky-500" />
          </Badge>
        </Button>
        {["4", "32", "999+"].map((count) => (
          <Button
            variant="text"
            key={count}
            size="icon"
            className="text-neutral-900"
          >
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
                alt="Jack"
              />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <Badge className="bg-error text-on-error absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 ring-2 ring-surface">
              {count}
            </Badge>
          </Button>
        ))}
        <Button variant="text" size="icon" className="text-neutral-900">
          <Avatar className="outline-2 outline-error outline-offset-2">
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge className="bg-error text-on-error absolute top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Live
          </Badge>
        </Button>
        <Button variant="text" size="icon" className="text-neutral-900">
          <Avatar className="outline-2 outline-success outline-offset-2">
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
              alt="Jack"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Badge
            size="icon"
            className="bg-surface absolute -bottom-1.5 -right-1.5"
          >
            <CircleCheckIcon className="fill-success" />
          </Badge>
        </Button>
      </div>
      <h2>Group</h2>
      <div className="flex -space-x-2 items-center">
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
            alt="Jack"
          />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Chase&backgroundColor=ffffff"
            alt="Chase"
          />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Ryker&backgroundColor=ffffff"
            alt="Ryker"
          />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Katherine&backgroundColor=ffffff"
            alt="Katherine"
          />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
      </div>
      <h2>Group with Left Avatar on the Top</h2>
      <div className="flex -space-x-2 items-center">
        <Avatar className="ring-2 ring-surface z-30">
          <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>

        <Avatar className="ring-2 ring-surface z-20">
          <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Chase&backgroundColor=ffffff" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>

        <Avatar className="ring-2 ring-surface z-10">
          <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Ryker&backgroundColor=ffffff" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>

        <Avatar className="ring-2 ring-surface z-0">
          <AvatarImage src="https://api.dicebear.com/9.x/lorelei/svg?seed=Katherine&backgroundColor=ffffff" />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
      </div>
      <h2>Group with Count</h2>
      <div className="flex -space-x-2 items-center">
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
            alt="Jack"
          />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Chase&backgroundColor=ffffff"
            alt="Chase"
          />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Ryker&backgroundColor=ffffff"
            alt="Ryker"
          />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-surface">
          <AvatarImage
            src="https://api.dicebear.com/9.x/lorelei/svg?seed=Katherine&backgroundColor=ffffff"
            alt="Katherine"
          />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-surface">
          <AvatarFallback>+9</AvatarFallback>
        </Avatar>
      </div>
      <h2>Misc</h2>
      <div className="not-markdown flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-center rounded-full border border-outline px-2 py-1.5 w-fit">
          <div className="flex -space-x-2">
            <Avatar className="ring-2 ring-surface size-6">
              <AvatarImage
                src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jack&backgroundColor=ffffff"
                alt="Jack"
              />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-surface size-6">
              <AvatarImage
                src="https://api.dicebear.com/9.x/lorelei/svg?seed=Chase&backgroundColor=ffffff"
                alt="Chase"
              />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-surface size-6">
              <AvatarImage
                src="https://api.dicebear.com/9.x/lorelei/svg?seed=Ryker&backgroundColor=ffffff"
                alt="Ryker"
              />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-surface size-6">
              <AvatarImage
                src="https://api.dicebear.com/9.x/lorelei/svg?seed=Katherine&backgroundColor=ffffff"
                alt="Katherine"
              />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-surface size-6">
              <AvatarFallback>+9</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-label-medium text-on-surface-variant px-2">
            Loved by <strong className="text-on-surface font-bold">10K+</strong>{" "}
            developers.
          </p>
        </div>
      </div>
    </>
  );
}
