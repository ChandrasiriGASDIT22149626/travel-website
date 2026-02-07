'use client'; 
import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { Mail, Phone, Youtube, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for mobile feel
      delayChildren: 0.1
    }
  }
};

const Footer = () => {
  return (
    <footer className="relative text-white font-sans z-20 overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/collections/seaa.jpg"
          alt="Footer Background" 
          className="w-full h-full object-cover"
        />
        {/* Darker Overlay for better text contrast */}
        <div className="absolute inset-0 bg-slate-900/90"></div> 
      </div>

      {/* --- FOOTER CONTENT --- */}
      <div className="relative z-10">
        
        {/* --- CALL TO ACTION (PLAN YOUR ADVENTURE) --- */}
        <div className="py-12 md:py-16 border-b border-white/10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
              Ready for an Unforgettable Journey?
            </h2>
            
            <Link href="/tour-packages" className="inline-block w-full md:w-auto">
              <button className="bg-[#7FB03F] text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm md:text-lg hover:bg-[#6a9632] transition-all duration-300 shadow-[0_0_20px_rgba(127,176,63,0.4)] hover:shadow-[0_0_30px_rgba(127,176,63,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:min-w-[400px]">
                Plan Your Adventure <ArrowRight size={20} />
              </button>
            </Link>

          </motion.div>
        </div>

        {/* Links Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // CHANGED: text-center for mobile, text-left for desktop
          className="container mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left"
        >
          {/* Column 1 */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Navigation</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/tour-packages" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="/tour-packages" className="hover:text-white transition-colors">Tours</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Bethel Family</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Bethel Hotels</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sri Lanka Tailor-Made</li>
              <li className="hover:text-white cursor-pointer transition-colors">Bethel Eco Holidays</li>
              <li className="hover:text-white cursor-pointer transition-colors">Bethel Air</li>
            </ul>
          </motion.div>

          {/* Column 3 - LINKS */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Tour</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><Link href="/tour-packages/cultural-express" className="hover:text-white transition-colors">Golden Triangle</Link></li>
              <li><Link href="/tour-packages/adventure-tours" className="hover:text-white transition-colors">Tea Trails & Hill Country</Link></li>
              <li><Link href="/tour-packages/classic-deluxe" className="hover:text-white transition-colors">Waves & Wildlife</Link></li>
              <li><Link href="/tour-packages/beach-splash" className="hover:text-white transition-colors">Luxury Signature</Link></li>
              <li><Link href="/tour-packages/grand-classic" className="hover:text-white transition-colors">Ancient Wonders</Link></li>
              <li><Link href="/tour-packages/wildlife-nature" className="hover:text-white transition-colors">Adventure Sri Lanka</Link></li>
              <li><Link href="/tour-packages/romantic-gateway" className="hover:text-white transition-colors">Honeymoon Paradise</Link></li>
              <li><Link href="/tour-packages/wellness-ayurvedic" className="hover:text-white transition-colors">Eco & Nature Trails</Link></li>
              <li><Link href="/tour-packages/ramayana-tour" className="hover:text-white transition-colors">Ramayana Tours</Link></li>
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Hotline</h3>
            
            {/* CHANGED: justify-center for mobile to align icons */}
            <div className="flex items-start justify-center md:justify-start gap-4 mb-6">
              <Phone className="text-[#7FB03F] mt-1" size={24} />
              <div className="text-left">
                <p className="text-xl font-bold text-white">+94 76 413 6737</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight">(24/7) International</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-gray-300 font-light italic">
              <p>NEGOMBO, SRI LANKA.</p>
              {/* CHANGED: justify-center for mobile */}
              <p className="flex items-center justify-center md:justify-start gap-2 hover:text-[#7FB03F] cursor-pointer transition-colors">
                <Mail size={16} className="text-[#7FB03F]" /> betheltours36@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Socials & Copyright */} 
        <div className="bg-black/40 py-8 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-8 mb-6">
              <Facebook size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
              <Instagram size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
              <Twitter size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
              <Youtube size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 gap-4 text-center">
              <p>© 2026 Bethel Ceylon Tours.</p>
              <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;