"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function InternalServerError() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-[7rem] font-bold">500</h1>
      <span className="font-medium">Oops! Something went wrong {`:')`}</span>
      <p className="text-center text-muted-foreground">
        We apologize for the inconvenience. <br /> Please try again later.
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
