import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SkeletonLoader() {
  return (
    <main className="relative p-6">
      <div className="bg-indigo absolute top-0 right-0 left-0 z-0 h-[357px] w-full rounded-b-4xl"></div>
      <header className="relative z-10 flex items-center justify-between rounded-md bg-white px-6 py-4">
        <Button asChild className="border-indigo text-indigo" variant="outline">
          <Link href="/">Back to Editor</Link>
        </Button>
        <div className="h-9 w-24 animate-pulse rounded-md bg-gray-200"></div>
      </header>
      <div className="relative z-10 mx-auto mt-28 max-w-[349px] rounded-xl bg-white px-14 py-12 shadow">
        {/* Avatar placeholder */}
        <div className="relative mx-auto mb-6 aspect-square w-28 animate-pulse rounded-full bg-gray-200"></div>

        {/* Name and email placeholders */}
        <div className="mb-14 space-y-4 text-center">
          <div className="mx-auto h-8 w-48 animate-pulse rounded-md bg-gray-200"></div>
          <div className="mx-auto h-5 w-36 animate-pulse rounded-md bg-gray-200"></div>
        </div>

        {/* Social links placeholders */}
        <div className="space-y-3.5">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="flex h-12 animate-pulse items-center gap-2 rounded-md bg-gray-200 px-4 py-3 shadow"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}
