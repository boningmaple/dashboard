"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function MaintenanceError() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-[7rem] leading-tight font-bold">503</h1>
      <span className="font-medium">Website is under maintenance!</span>
      <p className="text-center text-muted-foreground">
        The site is not available at the moment. <br />
        We'll be back online shortly.
      </p>
      <div className="mt-6 flex gap-4">
        <Button variant="outline" onClick={() => router.back()}>
          Go Back
        </Button>
        <Button asChild>
          <Link href="/pages/dashboard">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
