import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export function Avatar({ src, alt, className, fallback, ...props }: AvatarProps & React.HTMLAttributes<HTMLDivElement>) {
  const [error, setError] = React.useState(false);
  
  const initials = React.useMemo(() => {
    if (!fallback) return '';
    return fallback
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }, [fallback]);

  return (
    <div
      className={`relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full ${className || ''}`}
      {...props}
    >
      {!error && src ? (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white text-sm font-medium">
          {initials}
        </div>
      )}
    </div>
  );
}

// Made with Bob
