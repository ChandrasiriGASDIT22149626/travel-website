'use client'; 
import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { ArrowRight, Send, Mail, Phone, Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import Header from '@/components/Header';

// --- ANIMATION VARIANTS ---

// Fade Up with Spring Physics
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
  }
};

// Stagger Container (Children appear one by one)
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

// Scale Up Animation for Images
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen font-sans text-slate-900 overflow-x-hidden">
      <Header />

      {/* ================= BACKGROUND IMAGE ================= */}
      {/* Fixed background that stays in place while you scroll */}
      <div 
        className="fixed inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2574&auto=format&fit=crop')` 
        }}
      >
        {/* Light Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* ================= CONTENT (Relative z-10 to sit on top) ================= */}
      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              <div className="lg:w-1/2">
                <motion.span variants={fadeInUp} className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4 block">
                  Who We Are
                </motion.span>
                <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                  Bethel Ceylon <br /> <span className="text-blue-500 italic">Travels & Tours</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg text-slate-600 font-light leading-relaxed">
                  Bethel Ceylon Travels & Tours is dedicated to creating unforgettable travel experiences across the beautiful island of Sri Lanka.
                </motion.p>
              </div>

              {/* Asymmetric Image Grid with Hover Scale */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                 <motion.div 
                   variants={scaleUp}
                   whileHover={{ scale: 1.02 }}
                   className="col-span-2 h-80 rounded-xl overflow-hidden shadow-2xl"
                 >
                    <img src="https://images.unsplash.com/photo-1539576776193-2c07122e5fee?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Sri Lanka" />
                 </motion.div>
                 <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="h-48 rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Beach" />
                 </motion.div>
                 <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="h-48 rounded-xl overflow-hidden shadow-lg">
                    <img src="https://plus.unsplash.com/premium_photo-1680132275008-fd7988d585ad?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Wildlife" />
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- VISION SECTION --- */}
        <section className="bg-black/95 text-white py-24 md:py-32 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.span variants={fadeInUp} className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
                  VISION
                </motion.span>
                
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-medium leading-tight mb-8">
                  We're Changing the Way the World Thinks About <br />
                  <span className="text-gray-400">Sri Lankan Travel</span>
                </motion.h2>
                
                <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                  <motion.p variants={fadeInUp}>
                    Bethel Ceylon Travels & Tours is a newly established company dedicated to creating unforgettable experiences. 
                    We are passionate about introducing travelers to breathtaking landscapes, rich culture, and golden beaches.
                  </motion.p>
                  <motion.p variants={fadeInUp}>
                    To become one of Sri Lanka’s most trusted and recognized travel and tour companies by delivering exceptional travel experiences while promoting the natural beauty and cultural heritage of Sri Lanka to the world.
                  </motion.p>
                </div>
              </motion.div>

              {/* Right Image */}
              <div className="relative h-[500px] w-full bg-gray-900 rounded-lg overflow-hidden">
                 <motion.img 
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.8 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=2574&auto=format&fit=crop" 
                  alt="Visionary Travel" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-20"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 block">
                SERVICES
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900">
                We Deliver Exceptional <br /> Products and Services
              </h2>
            </motion.div>

            {/* Service Item 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-normal mb-6 uppercase tracking-wide">Safe & Comfortable</h3>
                <p className="text-slate-600 text-lg font-light mb-8 leading-relaxed">
                  We focus on providing safe, comfortable, and affordable travel solutions with friendly customer service. 
                  Whether you are planning a relaxing beach holiday or an adventurous tour, we make your journey smooth.
                </p>
                <button className="flex items-center gap-2 px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
              <div className="order-1 md:order-2 h-[400px] bg-white/50 backdrop-blur rounded-xl overflow-hidden shadow-lg">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1566371486490-560ded23b5e4?q=80&w=2670&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Safe Travel" 
                />
              </div>
            </motion.div>

            {/* Service Item 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="h-[400px] bg-white/50 backdrop-blur rounded-xl overflow-hidden shadow-lg">
                 <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://plus.unsplash.com/premium_photo-1679619558250-41fa96ef187c?q=80&w=2574&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Personalized" 
                />
              </div>
              <div>
                <h3 className="text-3xl font-normal mb-6 uppercase tracking-wide">Personalized Packages</h3>
                <p className="text-slate-600 text-lg font-light mb-8 leading-relaxed">
                  We offer personalized travel packages that meet individual needs and preferences. 
                  Your satisfaction and comfort are our top priorities, and we aim to build long-lasting relationships through trust.
                </p>
                <button className="flex items-center gap-2 px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- NUMBERS SECTION --- */}
        <section className="py-20 bg-white/80 backdrop-blur-md border-t border-gray-200">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h3 className="text-2xl font-light text-slate-800">Bethel In Numbers</h3>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-300 pt-12"
            >
              <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">100%</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Satisfaction</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">50+</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Destinations</p>
              </motion.div>
               <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24/7</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Support</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">2024</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Established</p>
              </motion.div>
            </motion.div>
          </div>
        </section>


      </div>
    </div>
  );
}