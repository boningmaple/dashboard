"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ForbiddenError() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-[7rem] font-bold">403</h1>
      <span className="font-medium">Access Forbidden</span>
      <p className="text-center text-muted-foreground">
        You don't have necessary permission <br />
        to view this resource.
      </p>
      <div className="mt-6 flex gap-4">
        <Button variant="outlined" onClick={() => router.back()}>
          Go Back
        </Button>
        <Button asChild>
          <Link href="/templates/dashboard">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
