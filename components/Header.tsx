'use client';

import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Instagram, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Determine header background: Scrolled OR Mobile Menu Open = White
  const headerBgClass = (isScrolled || isMobileMenuOpen) 
    ? 'bg-white shadow-md text-blue-900' 
    : 'bg-transparent text-white';

  const navItems = ['Home', 'About Us', 'Tour Packages', 'Rent Vehicle', 'Contact Us', 'Feedback'];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ease-in-out ${headerBgClass}`}
    >
      
      {/* ==========================
          TOP ROW: Logo, Socials (Desktop), Hamburger (Mobile)
          Adjusted padding here (py-4 -> py-2) to move header upward
      ========================== */}
      <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="flex justify-between items-center">
          
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 perspective-1000 z-50 relative"> 
            <Link href="/" onClick={handleLinkClick}>
              <img 
                src="/logo.png" 
                alt="Logo" 
                // Adjusted logo height slightly to fit the more compact header
                className={`w-auto object-contain cursor-pointer transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'h-12 md:h-16' : 'h-14 md:h-20'}`} 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextSibling = e.currentTarget.nextElementSibling;
                  if (nextSibling) {
                    nextSibling.classList.remove('hidden');
                  }
                }}
              />
              <span className="hidden text-xl font-bold">LOGO</span>
            </Link>
          </div>

          {/* CENTER/RIGHT: Social Media Icons (HIDDEN ON MOBILE, VISIBLE ON LG+) */}
          <div className="hidden lg:flex items-center gap-5">
            <SocialLinks isScrolled={isScrolled} />
          </div>

          {/* RIGHT: Hamburger Menu Button (VISIBLE ON MOBILE, HIDDEN ON LG+) */}
          <div className="lg:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X size={32} className="text-blue-900" />
              ) : (
                <Menu size={32} className={isScrolled ? 'text-blue-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ==========================
          SEPARATOR LINE (Desktop Only)
      ========================== */}
      <div className={`hidden lg:block w-full border-b transition-colors duration-300 ${isScrolled ? 'border-gray-100' : 'border-white/20'}`}></div>

      {/* ==========================
          BOTTOM ROW: Desktop Navigation
          Adjusted padding here (py-3 -> py-2) to move contents upward
      ========================== */}
      <div className={`hidden lg:block container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <nav>
          <ul className="flex justify-end items-center space-x-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <NavItem 
                key={item} 
                item={item} 
                isScrolled={isScrolled} 
                onClick={handleLinkClick} 
              />
            ))}
          </ul>
        </nav>
      </div>

      {/* ==========================
          MOBILE MENU OVERLAY
      ========================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 bg-white shadow-xl lg:hidden flex flex-col overflow-y-auto"
          >
            <nav className="container mx-auto px-6 py-8">
              <ul className="flex flex-col space-y-6 text-lg font-medium text-blue-900">
                {navItems.map((item, index) => {
                  const path = item === 'About Us' ? '/about' : item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                  
                  return (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 pb-2"
                    >
                      <Link 
                        href={path} 
                        onClick={handleLinkClick}
                        className="block w-full hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile Socials */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                 <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">Follow Us</p>
                 <div className="flex gap-6 text-blue-900">
                    <SocialLinks isScrolled={true} />
                 </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

// --- Helper Component: Nav Item ---
const NavItem = ({ item, isScrolled, onClick }: { item: string, isScrolled: boolean, onClick?: () => void }) => {
  const path = item === 'About Us' 
    ? '/about' 
    : item === 'Home' 
      ? '/' 
      : `/${item.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <li>
      <Link 
        href={path} 
        onClick={onClick}
        className={`relative group transition duration-300 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-300'}`}
      >
        {item}
        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-blue-600' : 'bg-blue-300'}`}></span>
      </Link>
    </li>
  );
};

// --- Helper Component: Social Links ---
const SocialLinks = ({ isScrolled }: { isScrolled: boolean }) => (
  <>
    <a 
      href="https://www.facebook.com/share/19hmTw82cX" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`transition-colors duration-200 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-400'}`}
    >
      <Facebook size={20} />
    </a>

    <a href="#" className={`transition-colors duration-200 ${isScrolled ? 'hover:text-blue-800' : 'hover:text-blue-500'}`}>
      <Linkedin size={20} />
    </a>
    <a href="#" className={`transition-colors duration-200 ${isScrolled ? 'hover:text-pink-600' : 'hover:text-pink-400'}`}>
      <Instagram size={20} />
    </a>
    
    <a href="#" className="hover:text-gray-400 transition-colors duration-200">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    </a>
  </>
);

export default Header;