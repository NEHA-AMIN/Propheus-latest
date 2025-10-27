'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-[100] bg-slate-100/90 dark:bg-slate-800/70 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/30 rounded-xl shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-end items-center h-16 gap-12">
          {/* Logo Section */}
          <div className="flex-1">
            <Link href="/" className="block cursor-pointer group">
              <div className="flex items-center transition-opacity duration-200 group-hover:opacity-80">
                <span className="text-xl font-normal tracking-[0.15em] text-primary-400 uppercase">
                  PR
                  <span className="relative inline-block">
                    <span className="text-primary-400">O</span>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary-400 rounded-full" />
                  </span>
                  PHEUS
                </span>
                {/* Decorative dots */}
                <div className="flex items-center ml-2 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-primary-400 rounded-full" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-light ml-1 transition-opacity duration-200 group-hover:opacity-80">
                by Evam Labs
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-end space-x-12">
            {[
              { name: 'Industries', href: '/industries' },
              { name: 'Resources', href: '/resources' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 font-normal text-base group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-400/80 to-secondary-400/80 group-hover:w-full transition-all duration-300 blur-[3px] shadow-[0_0_8px_rgba(45,212,191,0.7)]" />
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(45,212,191,1)]" />
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA (Desktop)
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="bg-transparent border border-slate-400 dark:border-slate-500 hover:border-primary-400 hover:bg-slate-200 dark:hover:bg-slate-800/30 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-white font-normal px-5 py-2 rounded-md transition-all duration-200 text-sm">
              Try Propheus
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1.5 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-4 h-4">
                <span
                  className={`absolute left-0 top-0.5 w-full h-[1px] bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] w-full h-[1px] bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[13px] w-full h-[1px] bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[calc(4rem+1px)] right-4 w-64 md:hidden z-[100]
          bg-slate-100/95 dark:bg-slate-800/95 backdrop-blur-md
          border border-slate-300/30 dark:border-slate-700/30 rounded-lg shadow-lg
          transform transition-all duration-300 ease-in-out origin-top-right
          ${
            isMenuOpen
              ? 'scale-100 opacity-100'
              : 'scale-95 opacity-0 pointer-events-none'
          }`}
      >
        <div className="p-4 space-y-4">
          {[
            { name: 'Industries', href: '/industries' },
            { name: 'Resources', href: '/resources' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-2 text-base text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-300 hover:bg-slate-200 dark:hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-300 dark:border-slate-700/30">
            <button className="w-full px-4 py-2 text-base text-primary-400 hover:text-primary-300 bg-slate-200 dark:bg-slate-700/30 hover:bg-slate-300 dark:hover:bg-slate-700/50 rounded-lg transition-all duration-200">
              Try Propheus
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
