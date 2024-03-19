"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild>
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
}
