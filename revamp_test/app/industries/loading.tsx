import { Skeleton, SkeletonCard } from '../components/Skeleton';

export default function Loading() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Navbar Skeleton */}
      <nav className="fixed top-4 left-4 right-4 z-[100]">
        <Skeleton className="h-16 w-full rounded-xl" />
      </nav>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Skeleton className="h-16 md:h-24 w-full mb-8 mx-auto" />
          <div className="space-y-4 mt-8">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6 mx-auto" />
            <Skeleton className="h-6 w-4/6 mx-auto" />
          </div>
        </div>
      </section>

      {/* Large semi-circle skeleton */}
      <div className="relative w-full h-[200vh] overflow-hidden my-24">
        <Skeleton className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[650px] rounded-t-full" />
      </div>

      {/* Cards grid skeleton */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} className="w-full max-w-sm h-[420px]" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
