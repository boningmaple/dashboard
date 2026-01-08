import { Badge } from "@/components/ui/badge";

export default function BadgeExample() {
  return (
    <div className="flex flex-col gap-4">
      <Badge>Default</Badge>
      <Badge>Primary</Badge>
      <Badge>Secondary</Badge>
      <Badge>Success</Badge>
      <Badge>Warning</Badge>
      <Badge>Error</Badge>
    </div>
  );
}
