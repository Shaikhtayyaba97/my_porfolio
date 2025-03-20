'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white p-5 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-teal-200 transition duration-300">
            My Portfolio
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex space-x-6 md:space-x-10">
            <li>
              <Link href="/" className="hover:text-teal-200 transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-200 transition duration-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-200 transition duration-300">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* 3-Line Hamburger Icon for Mobile */}
        <div className="md:hidden flex flex-col items-center justify-center space-y-1" onClick={toggleMenu}>
          <div className="w-8 h-1 bg-white rounded-md"></div>
          <div className="w-8 h-1 bg-white rounded-md"></div>
          <div className="w-8 h-1 bg-white rounded-md"></div>
        </div>
      </div>

      {/* Mobile menu (Full Screen on small devices) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 p-5`}>
        <ul className="flex flex-col space-y-4 text-center">
          <li>
            <Link href="/" className="text-white hover:text-teal-200 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-teal-200 transition duration-300">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-teal-200 transition duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
