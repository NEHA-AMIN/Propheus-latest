'use client';
import React from 'react';

export type LinkVariant = 'default' | 'primary' | 'muted' | 'underline';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  children: React.ReactNode;
  external?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'default', children, external = false, className = '', ...props }, ref) => {
    const baseStyles = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400/50 rounded';

    const variants: Record<LinkVariant, string> = {
      default: 'text-slate-300 hover:text-teal-400',
      primary: 'text-teal-400 hover:text-teal-300 font-semibold',
      muted: 'text-slate-500 hover:text-slate-300',
      underline: 'text-teal-400 hover:text-teal-300 underline underline-offset-4',
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

    const externalProps = external
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};

    return (
      <a ref={ref} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';

export default Link;
