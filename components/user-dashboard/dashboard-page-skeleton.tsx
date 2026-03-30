"use client";

/**
 * YouTube-style page skeleton: layout preview with shimmer placeholders.
 * Use while backend data is loading — no mock data, just structure.
 */
export function DashboardPageSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] animate-pulse flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:gap-6 lg:px-0 lg:py-6">
      <div className="h-14 rounded-sm bg-zinc-100 lg:hidden" />
      {/* Sidebar skeleton */}
      <div className="hidden shrink-0 space-y-4 lg:block lg:w-44">
        <div className="flex py-4 border-b border-b-zinc-100">
          <div className="w-12 h-12 rounded-full bg-zinc-200 shrink-0" />
          <div className="flex-1 pl-4 min-w-0 space-y-2">
            <div className="h-4 w-20 bg-zinc-200 rounded" />
            <div className="h-3 w-16 bg-zinc-100 rounded" />
          </div>
        </div>
        <div className="space-y-4 mt-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded bg-zinc-200 shrink-0" />
              <div className="h-4 flex-1 bg-zinc-100 rounded max-w-[80%]" />
            </div>
          ))}
        </div>
      </div>
      {/* Main content skeleton */}
      <div className="min-h-[320px] flex-1 min-w-0 rounded-sm bg-white px-4 py-5 shadow-sm sm:px-6 lg:min-h-[400px] lg:px-8 lg:py-6">
        <div className="h-7 w-48 bg-zinc-200 rounded mb-6" />
        <div className="space-y-4">
          <div className="h-10 w-full bg-zinc-100 rounded" />
          <div className="h-10 w-3/4 bg-zinc-100 rounded" />
          <div className="h-10 w-1/2 bg-zinc-100 rounded" />
        </div>
        <div className="mt-8 flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 w-16 bg-zinc-100 rounded" />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-28 bg-zinc-100 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
