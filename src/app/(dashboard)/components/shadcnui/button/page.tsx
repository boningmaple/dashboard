import {
  ArrowUpIcon,
  ArrowUpRightIcon,
  CircleFadingArrowUpIcon,
  GitBranchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold">Default Button</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <Button>Default</Button>
      </div>
      <h2 className="text-xl font-semibold">Size</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <div className="flex gap-2 items-center">
          <Button size="sm">Small</Button>
          <Button size="icon-sm">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button>Default</Button>
          <Button size="icon">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button size="lg">Large</Button>
          <Button size="icon-lg">
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
      <h2 className="text-xl font-semibold">Variant</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <div className="flex gap-2 items-center">
          <Button>Default</Button>
          <Button size="icon">
            <CircleFadingArrowUpIcon />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" size="icon">
            <CircleFadingArrowUpIcon />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline">Outline</Button>
          <Button size="icon" variant="outline">
            <CircleFadingArrowUpIcon />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="text">Text</Button>
          <Button variant="text" size="icon">
            <CircleFadingArrowUpIcon />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="link">Link</Button>
          <Button size="icon" variant="link">
            <CircleFadingArrowUpIcon />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="error">Error</Button>
          <Button variant="error" size="icon">
            <CircleFadingArrowUpIcon />
          </Button>
        </div>
      </div>
      <h2 className="text-xl font-semibold">With Icon</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <Button variant="outline" size="sm">
          <GitBranchIcon /> New Branch
        </Button>
        <Button variant="outline" size="sm">
          New Branch <GitBranchIcon />
        </Button>
      </div>
      <h2 className="text-xl font-semibold">Rounded</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <Button variant="outline" size="icon" className="rounded-full">
          <ArrowUpIcon />
        </Button>
      </div>
      <h2 className="text-xl font-semibold">Spinner</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <Button variant="outline" disabled>
          <Spinner />
          Submit
        </Button>
      </div>
      <h2 className="text-xl font-semibold">Others</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <Button
          variant="text"
          className="
            rounded-md
            border-2 border-foreground
            hover:bg-background
            active:bg-background
            font-bold
            shadow-[4px_4px_0_0] shadow-foreground
            transition-all
            hover:translate-x-px hover:translate-y-px
            hover:shadow-[3px_3px_0_0]
            active:translate-x-1 active:translate-y-1
            active:shadow-none
          "
        >
          Neobrutalism
        </Button>
      </div>
    </main>
  );
}
