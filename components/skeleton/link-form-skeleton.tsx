export function LinkFormSkeleton() {
  return (
    <>
      <div>
        <div className="mb-10">
          {/* Title and description placeholders */}
          <div className="mb-2 h-8 w-64 animate-pulse rounded-md bg-gray-200"></div>
          <div className="h-5 w-full max-w-md animate-pulse rounded-md bg-gray-200"></div>
        </div>

        {/* Add New Link button placeholder */}
        <div className="h-10 w-full animate-pulse rounded-md bg-gray-200"></div>

        <div className="mt-6">
          <div className="space-y-6 overflow-auto lg:max-h-[60vh]">
            {/* Generate 3 link item skeletons */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="space-y-3 rounded-md bg-gray-100 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Drag icon placeholder */}
                    <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
                    {/* Link number placeholder */}
                    <div className="h-5 w-16 animate-pulse rounded bg-gray-200"></div>
                  </div>
                  {/* Remove button placeholder */}
                  <div className="h-8 w-20 animate-pulse rounded bg-gray-200"></div>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Platform label placeholder */}
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                  {/* Platform dropdown placeholder */}
                  <div className="h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Link label placeholder */}
                  <div className="h-4 w-10 animate-pulse rounded bg-gray-200"></div>
                  {/* Link input placeholder */}
                  <div className="h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t">
        {/* Save button placeholder */}
        <div className="mt-4 h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
      </div>
    </>
  );
}
