import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 dark:from-slate-800/50 dark:via-slate-700/50 dark:to-slate-800/50 bg-[length:200%_100%] rounded ${className}`}
    style={{
      animation: 'shimmer 2s ease-in-out infinite',
    }}
  />
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} 
      />
    ))}
  </div>
);

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`rounded-xl border border-slate-300 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-900/50 p-6 ${className}`}>
    <Skeleton className="h-8 w-3/4 mb-4" />
    <SkeletonText lines={3} />
    <Skeleton className="h-10 w-32 mt-6" />
  </div>
);

export const SkeletonHero: React.FC = () => (
  <div className="h-screen w-full bg-slate-50 dark:bg-black flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <Skeleton className="h-16 w-full md:h-24 mb-6" />
      <Skeleton className="h-12 w-3/4 md:h-16 mb-6" />
      <SkeletonText lines={2} className="max-w-3xl mb-12" />
      <div className="flex gap-6">
        <Skeleton className="h-12 w-40 rounded-full" />
        <Skeleton className="h-12 w-40 rounded-full" />
      </div>
    </div>
  </div>
);

export const SkeletonSection: React.FC<{ cards?: number }> = ({ cards = 3 }) => (
  <section className="py-20 bg-slate-100 dark:bg-slate-950">
    <div className="container mx-auto px-6">
      <Skeleton className="h-12 w-96 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: cards }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </section>
);
