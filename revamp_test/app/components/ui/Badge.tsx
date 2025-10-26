'use client';
import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'ghost';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider transition-colors duration-200';

    const variants: Record<BadgeVariant, string> = {
      default: 'border border-white/10 bg-white/5 text-slate-200',
      primary: 'border border-teal-500/30 bg-teal-500/10 text-teal-300',
      secondary: 'border border-slate-700 bg-slate-800/50 text-slate-400',
      success: 'border border-green-500/30 bg-green-500/10 text-green-300',
      warning: 'border border-yellow-500/30 bg-yellow-500/10 text-yellow-300',
      ghost: 'border-0 bg-transparent text-teal-400',
    };

    const sizes: Record<BadgeSize, string> = {
      sm: 'px-2 py-0.5 text-[10px]',
      md: 'px-3 py-1 text-xs',
      lg: 'px-4 py-1.5 text-sm',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
