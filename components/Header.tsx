'use client';

import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-white shadow-md text-blue-900' 
          : 'bg-transparent text-white'        
        }
      `}
    >
      
      {/* ==========================
          TOP ROW: Logo & Socials
      ========================== */}
      {/* REDUCED PADDING HERE: Changed 'py-6' to 'py-4' and 'py-3' to 'py-2' */}
      <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          
          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/logoo.jpg" 
                alt="Logo" 
                className={`w-auto object-contain cursor-pointer transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} 
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

          {/* RIGHT: Social Media Icons */}
          <div className="flex items-center gap-5">
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
          </div>
        </div>
      </div>

      {/* ==========================
          SEPARATOR LINE
      ========================== */}
      <div className={`w-full border-b transition-colors duration-300 ${isScrolled ? 'border-gray-100' : 'border-white/20'}`}></div>

      {/* ==========================
          BOTTOM ROW: Navigation
      ========================== */}
      {/* REDUCED PADDING HERE: Changed 'py-5' to 'py-3' and 'py-3' to 'py-2' */}
      <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <nav>
          <ul className="flex justify-end items-center space-x-8 text-sm font-medium tracking-wide">
            {['Home', 'About Us', 'Tour Packages', 'Rent Vehicle', 'Contact Us', 'Feedback'].map((item) => {
              
              const path = item === 'About Us' 
                ? '/about' 
                : item === 'Home' 
                  ? '/' 
                  : `/${item.toLowerCase().replace(/\s+/g, '-')}`;

              return (
                <li key={item}>
                  <Link 
                    href={path} 
                    className={`relative group transition duration-300 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-300'}`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-blue-600' : 'bg-blue-300'}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;