import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function SkeletonLoader() {
  return (
    <main className="relative p-6">
      <div className="bg-indigo absolute top-0 right-0 left-0 z-0 h-[357px] w-full rounded-b-4xl"></div>
      <header className="relative z-10 flex items-center justify-between rounded-md bg-white px-6 py-4">
        <Button asChild className="border-indigo text-indigo" variant="outline">
          <Link href="/">Back to Editor</Link>
        </Button>
        <Skeleton className="h-9 w-24 rounded-md"></Skeleton>
      </header>
      <div className="relative z-10 mx-auto mt-28 max-w-[349px] rounded-xl bg-white px-14 py-12 shadow">
        {/* Avatar placeholder */}
        <Skeleton className="relative mx-auto mb-6 aspect-square w-28 rounded-full"></Skeleton>

        {/* Name and email placeholders */}
        <div className="mb-14 space-y-4 text-center">
          <Skeleton className="mx-auto h-8 w-48 rounded-md"></Skeleton>
          <Skeleton className="mx-auto h-5 w-36 rounded-md"></Skeleton>
        </div>

        {/* Social links placeholders */}
        <div className="space-y-3.5">
          {[1, 2, 3].map((index) => (
            <Skeleton
              key={index}
              className="flex h-12 items-center gap-2 rounded-md px-4 py-3 shadow"
            ></Skeleton>
          ))}
        </div>
      </div>
    </main>
  );
}
