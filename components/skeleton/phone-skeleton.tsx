import { Skeleton } from "../ui/skeleton";

export function PhoneSkeleton() {
  return (
    <div className="relative mx-auto w-fit">
      {/* Phone frame placeholder */}
      <div className="h-[700px] w-[300px] rounded-[36px] bg-gray-300"></div>

      <div>
        {/* Avatar skeleton */}
        <Skeleton className="absolute top-16 right-0 left-0 mx-auto aspect-square w-24 rounded-full"></Skeleton>

        {/* Name and email skeleton */}
        <div className="absolute top-44 right-5 left-5 space-y-1 text-center">
          <Skeleton className="mx-auto h-6 w-40 rounded-md"></Skeleton>
          <Skeleton className="mx-auto h-4 w-32 rounded-md"></Skeleton>
        </div>

        {/* Social links skeleton */}
        <div className="absolute top-[280px] right-8.5 left-8.5 space-y-3.5">
          {[1, 2, 3].map((index) => (
            <Skeleton
              key={index}
              className="flex items-center gap-2 rounded-md px-4 py-3 shadow"
            >
              <div className="h-5 w-5 rounded-sm bg-gray-200"></div>
              <div className="h-4 w-24 rounded-sm bg-gray-200"></div>
            </Skeleton>
          ))}
        </div>
      </div>
    </div>
  );
}
