import { cn } from "@/lib/utils/cn";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("skeleton rounded-md", className)} />;
}

export function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex justify-between pt-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <Skeleton className="h-52 sm:col-span-2 sm:h-auto rounded-none" />
        <div className="p-6 sm:col-span-3 space-y-3">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <div className="flex justify-between pt-4 border-t border-border">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
