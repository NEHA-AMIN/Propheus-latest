import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-[100] bg-gray-800/70 backdrop-blur-md border border-gray-700/30 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-end items-center h-16 gap-12">
          {/* Logo Section */}
          <div className="flex-1">
            <div className="flex items-center">
              {/* Propheus Logo */}
              <span className="text-xl font-normal tracking-[0.15em] text-teal-400 uppercase">
                PR
                <span className="relative inline-block">
                  <span className="text-teal-400">O</span>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                </span>
                PHEUS
              </span>
              {/* Decorative dots */}
              <div className="flex items-center ml-2 space-x-0.5">
                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-gray-400 font-light ml-1">
              by Evam Labs
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-end space-x-12">
            <a
              href="#product"
              className="relative text-gray-300 hover:text-white transition-colors duration-200 font-normal text-base group"
            >
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-teal-400/60 to-cyan-400/60 group-hover:w-full transition-all duration-300 blur-[3px] shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_3px_rgba(45,212,191,0.8)]" />
            </a>
            <a
              href="#playground"
              className="relative text-gray-300 hover:text-white transition-colors duration-200 font-normal text-base group"
            >
              Playground
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-teal-400/60 to-cyan-400/60 group-hover:w-full transition-all duration-300 blur-[3px] shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_3px_rgba(45,212,191,0.8)]" />
            </a>
            <Link
              to="/industries"
              className="relative text-gray-300 hover:text-white transition-colors duration-200 font-normal text-base group"
            >
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-teal-400/60 to-cyan-400/60 group-hover:w-full transition-all duration-300 blur-[3px] shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_3px_rgba(45,212,191,0.8)]" />
            </Link>
            <a
              href="#about"
              className="relative text-gray-300 hover:text-white transition-colors duration-200 font-normal text-base group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-teal-400/60 to-cyan-400/60 group-hover:w-full transition-all duration-300 blur-[3px] shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_3px_rgba(45,212,191,0.8)]" />
            </a>
          </div>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <button className="bg-transparent border border-gray-500 hover:border-gray-400 hover:bg-gray-800/30 text-gray-300 hover:text-white font-normal px-5 py-2 rounded-md transition-all duration-200 text-sm">
              Try Propheus
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-1.5 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-4 h-4">
                <span className={`absolute left-0 top-0.5 w-full h-[1px] bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                <span className={`absolute left-0 top-[7px] w-full h-[1px] bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 top-[13px] w-full h-[1px] bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`
          fixed top-[calc(4rem+1px)] right-4 w-64 md:hidden z-[100]
          bg-gray-800/95 backdrop-blur-md
          border border-gray-700/30 rounded-lg shadow-lg
          transform transition-all duration-300 ease-in-out origin-top-right
          ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
      >
        <div className="p-4 space-y-4">
          <a href="#product" className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200">
            Product
          </a>
          <a href="#playground" className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200">
            Playground
          </a>
          <Link to="/industries" className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200">
            Industries
          </Link>
          <a href="#about" className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200">
            About Us
          </a>
          <div className="pt-2 border-t border-gray-700/30">
            <button className="w-full px-4 py-2 text-base text-teal-400 hover:text-teal-300 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg transition-all duration-200">
              Try Propheus
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
