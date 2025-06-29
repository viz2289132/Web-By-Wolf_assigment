'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './ui/Button';
import { cn } from '@/lib/utils';

function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 flex items-center justify-between px-4 py-2 rounded-lg bg-transparent',
        className
      )}
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Middle: Links */}
      <div className="hidden md:flex flex-1 justify-center space-x-6 text-blue-500 text-sm font-medium">
        <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
        <Link href="/services" className="hover:text-blue-700 transition-colors">Services</Link>
        <Link href="/contact" className="hover:text-blue-700 transition-colors">Contact</Link>
      </div>

      {/* Right: Sign In */}
      <div className="flex-shrink-0">
        <Button label="Sign In" />
      </div>
    </nav>
  );
}

export default Navbar;
