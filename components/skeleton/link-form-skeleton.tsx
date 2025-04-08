import { Skeleton } from "../ui/skeleton";

export function LinkFormSkeleton() {
  return (
    <>
      <div>
        <div className="mb-10">
          {/* Title and description placeholders */}
          <Skeleton className="mb-2 h-8 w-64 rounded-md"></Skeleton>
          <Skeleton className="h-5 w-full max-w-md rounded-md"></Skeleton>
        </div>

        {/* Add New Link button placeholder */}
        <Skeleton className="h-10 w-full rounded-md"></Skeleton>

        <div className="mt-6">
          <div className="space-y-6 overflow-auto lg:max-h-[60vh]">
            {/* Generate 3 link item skeletons */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="space-y-3 rounded-md bg-gray-100 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Drag icon placeholder */}
                    <Skeleton className="h-6 w-6 rounded"></Skeleton>
                    {/* Link number placeholder */}
                    <Skeleton className="h-5 w-16 rounded"></Skeleton>
                  </div>
                  {/* Remove button placeholder */}
                  <Skeleton className="h-8 w-20 rounded"></Skeleton>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Platform label placeholder */}
                  <Skeleton className="h-4 w-16 rounded"></Skeleton>
                  {/* Platform dropdown placeholder */}
                  <Skeleton className="h-10 w-full rounded-md"></Skeleton>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Link label placeholder */}
                  <Skeleton className="h-4 w-10 rounded"></Skeleton>
                  {/* Link input placeholder */}
                  <Skeleton className="h-10 w-full rounded-md"></Skeleton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t">
        {/* Save button placeholder */}
        <Skeleton className="mt-4 h-10 w-full rounded-md"></Skeleton>
      </div>
    </>
  );
}
