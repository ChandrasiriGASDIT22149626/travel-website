'use client'; 
import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { ArrowRight, MapPin, Calendar, MousePointer2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- DATA ARRAY (UNCHANGED) ---
const packages = [

  {
    id: 1,
    title: "GOLDEN TRIANGLE & CULTURAL TREASURES",
    duration: "05 Nights",
    destinations: "03 Destinations",
    desc: "Discover Sri Lanka’s rich cultural heritage with historic landmarks and traditions.",
    link: "/tour-packages/cultural-express",
    image: "/tours/cultural-express.jpg" // Updated to local
  },
  {
    id: 2,
    title: "TEA TRAILS & HILL COUNTRY ESCAPE",
    duration: "08 Nights",
    destinations: "07 Destinations",
    desc: "Perfect for thrill seekers—safaris, hikes, and nature expeditions await.",
    link: "/tour-packages/adventure-tours",
    image: "/tours/hill-country.jpg" // Updated to local
  },
  {
    id: 3,
    title: "WAVES & WILDLIFE",
    duration: "07 Nights",
    destinations: "07 Destinations",
    desc: "A premium tour combining luxury with iconic sights and authentic experiences.",
    link: "/tour-packages/classic-deluxe",
    image: "/tours/waves-wildlife.jpg" // Updated to local
  },
  {
    id: 4,
    title: "LUXURY SRI LANKA SIGNATURE",
    duration: "9 Nights",
    destinations: "08 Destinations",
    desc: "Relax on golden beaches and enjoy coastal adventures with stunning sunsets.",
    link: "/tour-packages/beach-splash",
    image: "/tours/luxury-signature.jpg" // Updated to local
  },
  {
    id: 5,
    title: "ANCIENT WONDERS & WELLNESS",
    duration: "6 Nights",
    destinations: "04 Destinations",
    desc: "The ultimate Sri Lanka experience—covering all major cultural and natural wonders.",
    link: "/tour-packages/grand-classic",
    image: "/tours/ancient-wonders.jpg" // Updated to local
  },
  {
    id: 6,
    title: "ADVENTURE SRI LANKA",
    duration: "8 Nights",
    destinations: "05 Destinations",
    desc: "Explore national parks, wildlife safaris, and breathtaking natural landscapes.",
    link: "/tour-packages/wildlife-nature",
    image: "/tours/adventure.jpg" // Updated to local
  },
  {
    id: 7,
    title: "HONEYMOON IN PARADISE",
    duration: "6 Nights",
    destinations: "05 Destinations",
    desc: "A dreamy getaway with romantic beaches, hills, and scenic escapes.",
    link: "/tour-packages/romantic-gateway",
    image: "/tours/honeymoon.jpg" // Updated to local
  },
  {
    id: 8,
    title: "ECO & NATURE TRAILS",
    duration: "07 Nights",
    destinations: "06 Destinations",
    desc: "Rejuvenate with Ayurveda treatments and peaceful retreats across Sri Lanka.",
    link: "/tour-packages/wellness-ayurvedic",
    image: "https://images.unsplash.com/photo-1734279135113-8bd58bc02b69?q=80&w=800&auto=format&fit=crop" // KEPT UNCHANGED
  },
  {
    id: 9,
    title: "RAMAYANA TOUR",
    duration: "14 Nights",
    destinations: "08 Destinations",
    desc: "Follow the Ramayana trail visiting sacred temples and legendary sites.",
    link: "/tour-packages/ramayana-tour",
    image: "/tours/ramayana.jpg" // Updated to local
  }
];

// --- ANIMATION VARIANTS ---
const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  }
};

export default function TourPackages() {
  return (
    <div className="relative min-h-screen font-sans bg-slate-900">
      <Header />

      {/* --- FIXED BACKGROUND (Parallax Effect) --- */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2670&auto=format&fit=crop" 
          alt="Sri Lanka Travel"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.span 
              variants={textVariants}
              className="inline-block py-1 px-3 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-200 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm"
            >
              Explore the Wonder of Asia
            </motion.span>
            
            <motion.h1 
              variants={textVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl"
            >
              Curated Journeys <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
                Unforgettable Memories
              </span>
            </motion.h1>

            <motion.p 
              variants={textVariants}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
            >
              From the misty hills of Ella to the golden coasts of Mirissa, choose a package that speaks to your soul.
            </motion.p>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest"></span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </motion.div>
        </section>

        {/* --- PACKAGES GRID SECTION --- */}
        <section className="container mx-auto px-6 pb-24 -mt-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Calendar size={12} className="text-blue-600" /> {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                  <div className="mb-4">
                    <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                      <MapPin size={14} /> {pkg.destinations}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">
                      {pkg.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {pkg.desc}
                  </p>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <a 
                      href={pkg.link} 
                      className="group/btn flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors"
                    >
                      View Details 
                      <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      
      
    </div>
  );
}