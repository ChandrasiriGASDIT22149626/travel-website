'use client'; 
import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { Send, Mail, Phone, Youtube, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const Footer = () => {
  return (
    <footer className="relative text-white font-sans z-20">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        {/* Make sure this image exists in your public folder */}
        <img 
          src="/collections/seaa.jpg"
          alt="Footer Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/80"></div> 
      </div>

      {/* --- FOOTER CONTENT --- */}
      <div className="relative z-10">
        
        {/* --- CALL TO ACTION (PLAN YOUR ADVENTURE) --- */}
        <div className="py-16 border-b border-white/10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Ready for an Unforgettable Journey?</h2>
            
            <Link href="/tour-packages" className="inline-block w-full md:w-auto">
              <button className="bg-[#7FB03F] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-lg hover:bg-[#6a9632] transition-all duration-300 shadow-[0_0_20px_rgba(127,176,63,0.4)] hover:shadow-[0_0_30px_rgba(127,176,63,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:min-w-[400px]">
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
          className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Column 1 */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-6 pb-2 border-b border-white/10">Navigation</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li className="hover:text-white cursor-pointer transition-colors"><Link href="/about">About Us</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link href="/collections">Destinations</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link href="/tour-packages">Experiences</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link href="/tour-packages">Tours</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-6 pb-2 border-b border-white/10">Bethel Family</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Bethel Hotels</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sri Lanka Tailor-Made</li>
              <li className="hover:text-white cursor-pointer transition-colors">Bethel Eco Holidays</li>
              <li className="hover:text-white cursor-pointer transition-colors">Bethel Air</li>
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-6 pb-2 border-b border-white/10">Tour</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Golden Triangle & Cultural Treasures</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tea Trials & Hill Country</li>
              <li className="hover:text-white cursor-pointer transition-colors">Waves & Wildlife</li>
              <li className="hover:text-white cursor-pointer transition-colors">Luxury Srilanka Signature</li>
              <li className="hover:text-white cursor-pointer transition-colors">Ancient Wonders & Wellness</li>
              <li className="hover:text-white cursor-pointer transition-colors">Adventure Srilanka</li>
              <li className="hover:text-white cursor-pointer transition-colors">Honeymoon In Paradise</li>
              <li className="hover:text-white cursor-pointer transition-colors">Eco & Nature Trials</li>
              <li className="hover:text-white cursor-pointer transition-colors">Ramayana Tours</li>
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#7FB03F] uppercase tracking-[0.2em] font-bold text-xs mb-6 pb-2 border-b border-white/10">Hotline</h3>
            <div className="flex items-start gap-4 mb-6">
              <Phone className="text-[#7FB03F]" size={24} />
              <div>
                <p className="text-xl font-bold">+94 77 726 5746</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">(24/7) Only for international inquiries</p>
              </div>
            </div>
            <div className="space-y-2 text-xs text-gray-400 font-light italic">
              <p> NEGOMBO SRI LANKA.</p>
              <p className="flex items-center gap-2 hover:text-[#7FB03F] cursor-pointer transition-colors">
                <Mail size={14} className="text-[#7FB03F]" /> info@bethelceylontours.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Socials & Copyright */} 
        <div className="bg-black/40 py-10 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-8 mb-8">
              <Facebook size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
              <Instagram size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
              <Twitter size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
              <Youtube size={20} className="text-gray-400 hover:text-[#7FB03F] cursor-pointer transition-colors transform hover:scale-110" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
              <p>© 2026 Bethel Ceylon Tours (Private) Ltd.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;