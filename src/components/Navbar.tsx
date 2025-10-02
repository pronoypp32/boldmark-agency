'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Work' },
    { href: '/blog', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black dark:border-rose-400 backdrop-blur-xl shadow-sm border-b border-rose-400 dark:border-rose-400' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 animate-fade-in">
            <div className="bg-gradient-to-r from-royal-rose to-indigo-600 text-green-400 w-8 h-8 rounded-lg flex items-center justify-center font-bold">
              B
            </div>
            <span className="text-xl font-bold text-rose-400  bg-clip-text ">
              BoldMark
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-royal-green bg-royal-green/10 dark:bg-royal-green/20'
                    : 'text-green-400 hover:text-royal-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:text-royal-blue dark:hover:bg-yellow-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
            <button className="ml-4 bg-gradient-to-r from-royal-blue to-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:from-indigo-600 hover:to-royal-blue transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-200 hover:text-royal-blue focus:outline-none dark:text-gray-300 dark:hover:text-royal-blue"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg border-t border-rose-500 dark:border-rose-500">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-royal-blue bg-royal-blue/10 dark:bg-royal-blue/20'
                    : 'text-gray-700 hover:text-royal-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:text-royal-blue dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-royal-blue to-indigo-600 text-white px-5 py-3 rounded-lg text-base font-semibold hover:from-indigo-600 hover:to-royal-blue transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}