import { Skeleton, SkeletonHero, SkeletonSection } from './components/Skeleton';

export default function Loading() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Navbar Skeleton */}
      <nav className="fixed top-4 left-4 right-4 z-[100]">
        <Skeleton className="h-16 w-full rounded-xl" />
      </nav>
      
      <SkeletonHero />
      <SkeletonSection cards={6} />
      <SkeletonSection cards={4} />
    </div>
  );
}
