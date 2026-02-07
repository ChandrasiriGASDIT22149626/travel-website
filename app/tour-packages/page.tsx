'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Star, Compass, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- DATA ARRAY (With Prices) ---
const packages = [
  {
    id: 1,
    title: "GOLDEN TRIANGLE & CULTURAL TREASURES",
    duration: "05 Nights",
    destinations: "03 Destinations",
    price: "$613",
    desc: "Discover Sri Lanka’s rich cultural heritage with historic landmarks and traditions.",
    link: "/tour-packages/cultural-express",
    image: "/tours/cultural-express.webp",
    tag: "Best Seller",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    title: "TEA TRAILS & HILL COUNTRY ESCAPE",
    duration: "08 Nights",
    destinations: "07 Destinations",
    price: "$589",
    desc: "Perfect for thrill seekers—safaris, hikes, and nature expeditions await.",
    link: "/tour-packages/adventure-tours",
    image: "/tours/hill-country.webp",
    tag: "Adventure",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 3,
    title: "WAVES & WILDLIFE",
    duration: "07 Nights",
    destinations: "07 Destinations",
    price: "$702",
    desc: "A premium tour combining luxury with iconic sights and authentic experiences.",
    link: "/tour-packages/classic-deluxe",
    image: "/tours/waves-wildlife.webp",
    tag: "Popular",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 4,
    title: "LUXURY SRI LANKA SIGNATURE",
    duration: "9 Nights",
    destinations: "08 Destinations",
    price: "FROM $1,062",
    desc: "Relax on golden beaches and enjoy coastal adventures with stunning sunsets.",
    link: "/tour-packages/beach-splash",
    image: "/tours/luxury-signature.webp",
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 5,
    title: "ANCIENT WONDERS & WELLNESS",
    duration: "6 Nights",
    destinations: "04 Destinations",
    price: "FROM $697",
    desc: "The ultimate Sri Lanka experience—covering all major cultural and natural wonders.",
    link: "/tour-packages/grand-classic",
    image: "/tours/ancient-wonders.webp",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 6,
    title: "ADVENTURE SRI LANKA",
    duration: "8 Nights",
    destinations: "05 Destinations",
    price: "FROM $739",
    desc: "Explore national parks, wildlife safaris, and breathtaking natural landscapes.",
    link: "/tour-packages/wildlife-nature",
    image: "/tours/adventure.webp",
    color: "from-lime-400 to-green-500"
  },
  {
    id: 7,
    title: "HONEYMOON IN PARADISE",
    duration: "6 Nights",
    destinations: "05 Destinations",
    price: "FROM $630",
    desc: "A dreamy getaway with romantic beaches, hills, and scenic escapes.",
    link: "/tour-packages/romantic-gateway",
    image: "/tours/honeymoon.webp",
    color: "from-rose-400 to-pink-600"
  },
  {
    id: 8,
    title: "ECO & NATURE TRAILS",
    duration: "07 Nights",
    destinations: "06 Destinations",
    price: "FROM $770",
    desc: "Rejuvenate with Ayurveda treatments and peaceful retreats across Sri Lanka.",
    link: "/tour-packages/wellness-ayurvedic",
    image: "https://images.unsplash.com/photo-1734279135113-8bd58bc02b69?q=80&w=800&auto=format&fit=crop",
    color: "from-teal-400 to-green-500"
  },
  {
    id: 9,
    title: "RATHNAPURA TOUR",
    duration: "14 Nights",
    destinations: "08 Destinations",
    price: "FROM $605",
    desc: "Follow the Rathnapura trail visiting sacred temples and legendary sites.",
    link: "/tour-packages/gems-wellness",
    image: "/tours/ramayana.webp",
    color: "from-indigo-400 to-violet-600"
  }
];

export default function TourPackages() {
  return (
    <div className="relative min-h-screen font-sans bg-white text-slate-900 overflow-x-hidden">
      <Header />

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100 rounded-full blur-[80px] md:blur-[100px] opacity-60" />
        <div className="absolute top-[20%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-yellow-50 rounded-full blur-[80px] md:blur-[100px] opacity-60" />
        <div className="absolute bottom-[10%] right-[0%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-50 rounded-full blur-[80px] md:blur-[100px] opacity-60" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/tours/background.webp" 
              alt="Sri Lanka Background" 
              className="w-full h-full object-cover"
            />
            {/* White Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white text-slate-600 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Compass size={16} className="text-orange-500" /> Discover Sri Lanka
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-none drop-shadow-sm">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient-x">
                Perfect Adventure
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-10 md:mb-12">
              We have curated the finest experiences just for you. Scroll down to begin your journey through the wonder of Asia.
            </p>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2 text-slate-500"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Explore Packages</span>
              <ArrowRight className="rotate-90 text-slate-900" size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* --- FEATURED SECTION (Zig-Zag Layout) --- */}
        <section className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="space-y-20 md:space-y-32">
            {packages.slice(0, 3).map((pkg, index) => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} rounded-[2rem] md:rounded-[3rem] transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500`}></div>
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  {/* Floating Tag */}
                  <div className="absolute top-6 -left-2 md:top-8 md:-left-4 bg-white py-2 px-4 md:py-3 md:px-6 rounded-r-full shadow-lg border-l-4 border-slate-900">
                    <span className="font-bold text-slate-900 uppercase tracking-widest text-xs md:text-sm flex items-center gap-2">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" /> {pkg.tag}
                    </span>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold shadow-lg flex items-center gap-1 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <span className="text-xs font-medium uppercase">From</span>
                    <span className="text-lg">{pkg.price}</span>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className={`text-xs md:text-sm font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent uppercase tracking-widest mb-3 md:mb-4`}>
                    0{index + 1} Featured Tour
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
                    {pkg.title}
                  </h2>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                    <span className="px-3 py-2 md:px-4 md:py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-xs md:text-sm flex items-center gap-2">
                      <Calendar size={14} className="md:w-4 md:h-4" /> {pkg.duration}
                    </span>
                    <span className="px-3 py-2 md:px-4 md:py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-xs md:text-sm flex items-center gap-2">
                      <MapPin size={14} className="md:w-4 md:h-4" /> {pkg.destinations}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                    {pkg.desc}
                  </p>
                  <a href={pkg.link}>
                    <button className={`px-8 py-3 md:px-10 md:py-4 rounded-full bg-slate-900 text-white text-sm md:text-base font-bold uppercase tracking-widest hover:bg-gradient-to-r ${pkg.color} transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1`}>
                      View Itinerary
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- THE COLLECTION (Grid Layout) --- */}
        <section className="bg-slate-50 py-20 md:py-32 rounded-t-[3rem] md:rounded-t-[4rem] relative overflow-hidden">
          {/* Decorative Text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[5%] left-[5%] text-[6rem] md:text-[12rem] lg:text-[20rem] font-black text-slate-200 opacity-20 select-none">TOURS</div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4">More Adventures</h2>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">Explore our diverse collection of tailored experiences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {packages.slice(3).map((pkg) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                      {pkg.duration}
                    </div>

                    {/* Price Badge for Grid Items */}
                    <div className="absolute bottom-4 left-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-lg font-bold text-sm shadow-md">
                      {pkg.price}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-grow">
                      {pkg.desc}
                    </p>
                    <a href={pkg.link} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors mt-auto">
                      Explore This Tour <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                  {/* Colorful Bottom Bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${pkg.color}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      
    
    </div>
  );
}