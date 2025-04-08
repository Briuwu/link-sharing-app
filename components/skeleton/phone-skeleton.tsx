export function PhoneSkeleton() {
  return (
    <div className="relative mx-auto w-fit">
      {/* Phone frame placeholder */}
      <div className="h-[600px] w-[300px] rounded-[36px] bg-gray-200"></div>

      <div>
        {/* Avatar skeleton */}
        <div className="absolute top-16 right-0 left-0 mx-auto aspect-square w-24 animate-pulse rounded-full bg-gray-300"></div>

        {/* Name and email skeleton */}
        <div className="absolute top-44 right-5 left-5 space-y-1 text-center">
          <div className="mx-auto h-6 w-40 animate-pulse rounded-md bg-gray-300"></div>
          <div className="mx-auto h-4 w-32 animate-pulse rounded-md bg-gray-200"></div>
        </div>

        {/* Social links skeleton */}
        <div className="absolute top-[280px] right-8.5 left-8.5 space-y-3.5">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="flex animate-pulse items-center gap-2 rounded-md bg-gray-200 px-4 py-3 shadow"
            >
              <div className="h-5 w-5 rounded-sm bg-gray-300"></div>
              <div className="h-4 w-24 rounded-sm bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
