import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("rounded-xl bg-white p-6 md:p-10", className)}>
      {children}
    </div>
  );
};
