"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function UnauthorizedError() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-[7rem] font-bold">401</h1>
      <span className="font-medium">Unauthorized Access</span>
      <p className="text-center text-muted-foreground">
        Please log in with the appropriate credentials <br /> to access this
        resource.
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
