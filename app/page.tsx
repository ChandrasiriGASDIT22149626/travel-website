'use client';
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "94764136737"; 

// --- TESTIMONIAL DATA ---
const testimonials = [
  {
    name: "Charlotte",
    country: "United Kingdom",
    text: "Had a magical trip to Sri Lanka with over 1,000 photos and a fantastic 20-minute film made by our son. Smooth, hassle-free holiday with a perfect guide. Highly recommended!",
    img: "/feedback/feeb.webp"
    
  },
  {
    name: "James & Sarah",
    country: "Australia",
    text: "The diversity of this island is breathtaking. From the misty tea hills of Ella to the sunny beaches of Mirissa, every moment was perfectly planned. Our driver was exceptional.",
    img: "/feedback/header.jpg"
  },
  {
    name: "Elena",
    country: "Germany",
    text: "We loved the cultural tour! Sigiriya was the highlight. The climb was tough but worth every step for that view. Thank you, Bethel Ceylon Tours, for organizing such a seamless experience.",
    img: "/feedback/background.jpg"
  },
  {
    name: "Hiroshi",
    country: "Japan",
    text: "A wonderful blend of adventure and relaxation. The safari at Yala gave us our first leopard sighting! The hotels selected were top-notch and very comfortable.",
    img: "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Isabella",
    country: "Italy",
    text: "The food, the people, the scenery—everything was perfect. Our guide introduced us to authentic local cuisine which we absolutely loved. Will definitely return.",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Mark",
    country: "USA",
    text: "I was worried about traveling solo, but this team made me feel safe and welcomed. The itinerary was flexible enough to let me explore at my own pace.",
     img: "/feedback/background.jpg"
  },
  {
    name: "The Müller Family",
    country: "Switzerland",
    text: "Traveling with kids can be hard, but this tour was fantastic. The kids loved the elephant orphanage and the turtle hatchery. Great family memories made.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Chloe",
    country: "France",
    text: "The train ride from Kandy to Ella is a must-do! It was the most scenic journey of my life. Everything was coordinated perfectly by the team.",
    img: "https://images.unsplash.com/photo-1534008753122-a837cf46d288?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Wei",
    country: "China",
    text: "Professional service from start to finish. The vehicle was clean and modern, and the driver spoke excellent English. We learned so much about the history.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "David",
    country: "Canada",
    text: "Surfing in Arugam Bay was the dream. Thanks for arranging the transport and the surfboard rentals. Everything went off without a hitch.",
    img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1000"
  }
];

// --- CUSTOM HOOK: COUNT UP ANIMATION ---
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < duration) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, elementRef };
};

const StatItem = ({ target, label, sub, suffix = "+" }: { target: number, label: string, sub: string, suffix?: string }) => {
  const { count, elementRef } = useCounter(target);
  return (
    <div ref={elementRef} className="px-2 md:px-4 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 pb-6 md:pb-0 flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 font-sans">{count}{suffix}</h3>
      <p className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-green-500 tracking-wide uppercase text-center">{label}</p>
      <p className="text-xs md:text-sm text-slate-500 font-light text-center">{sub}</p>
    </div>
  );
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0); // State for testimonials
  const router = useRouter();

  const slides = 
  [
  { 
    id: 1, 
    subtitle: "Ancient Fortress", 
    title: "SIGIRIYA", 
    desc: "Explore the majestic Lion Rock, an ancient fortress built on a giant column of rock.", 
    img: "https://images.unsplash.com/photo-1539576776193-2c07122e5fee?q=80&w=2670&auto=format&fit=crop", 
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sigiriya+Sri+Lanka" 
  },
  { 
    id: 2, 
    subtitle: "Hill Country", 
    title: "ELLA", 
    desc: "Walk along the Nine Arches Bridge and immerse yourself in the misty tea plantations.", 
    img: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2670&auto=format&fit=crop",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Ella" 
  },
  { 
    id: 3, 
    subtitle: "Coastal Bliss", 
    title: "MIRISSA", 
    desc: "Relax on golden sands and witness the majestic blue whales in the Indian Ocean.", 
    img: "/collections/mirissa.jpg", 
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mirissa+Sri+Lanka" 
  },
  { 
    id: 4, 
    subtitle: "Sacred City", 
    title: "KANDY", 
    desc: "Visit the Temple of the Tooth Relic and experience the rich culture of the hill capital.", 
    img: "/collections/kandy.jpg", 
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kandy+Sri+Lanka" 
  },
  { 
    id: 5, 
    subtitle: "Endless blue horizons", 
    title: "ARUGAMBAY", 
    desc: "Relax by the crystal clear waters and pristine beaches of the island.", 
    img: "/collections/sea.jpg", 
    mapLink: "https://www.google.com/maps/search/?api=1&query=Negombo" 
  },
  { 
    id: 6, 
    subtitle: "Where history stands strong", 
    title: "Galle Fort", 
    desc: "Walk through the cobblestone streets of this UNESCO World Heritage site.", 
    img: "https://images.unsplash.com/photo-1509982724584-2ce0d4366d8b?q=80&w=2670&auto=format&fit=crop",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Galle Fort" 
  },
  { 
    id: 7, 
    subtitle: "Where history stands strong", 
    title: "Yala", 
    desc: "Walk through the cobblestone streets of this UNESCO World Heritage site.", 
    img: "/collections/yala.jpg", 
    mapLink: "https://www.google.com/maps/search/?api=1&query=Yala" 
  },
];

  // --- AUTO SLIDER LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer); 
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  // --- TESTIMONIAL HANDLERS ---
  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative">
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full bg-black text-white">
        
        {/* UPDATED: Removed AnimatePresence & motion props. 
            The image now switches instantly without the fade-to-black animation. */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/40 z-10" />
           <img 
             src={currentSlide.img} 
             alt={currentSlide.title} 
             className="w-full h-full object-cover" 
           />
        </div>

        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end h-full pb-12 lg:pb-24">
            <div className="lg:col-span-7 flex flex-col justify-center h-full pt-20">
             <motion.div 
  key={currentSlide.id + "-text"} 
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <h3 className="text-yellow-400 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm lg:text-base">
    Bethel Ceylon Tours
  </h3>
 
  <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-4 lg:mb-6 leading-none tracking-tight drop-shadow-lg">
    {currentSlide.title}
  </h1>
  <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-lg mb-6 lg:mb-8 font-light leading-relaxed drop-shadow-md">
    {currentSlide.desc}
  </p>
  
  <div className="flex flex-col items-start gap-4 lg:gap-6">
    {/* 1. Existing Explore Button (Unchanged) */}
    <button 
      onClick={() => window.open(currentSlide.mapLink, '_blank')} 
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold transition-all flex items-center gap-3 w-fit group shadow-lg hover:shadow-blue-500/50 text-sm lg:text-base"
    >
      Explore {currentSlide.title} 
      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
    </button>

    {/* 2. NEW: Transparent Button with Typing Animation */}
    <motion.button 
      onClick={() => router.push('/tour-packages')}
      className="px-6 py-3 lg:px-8 lg:py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-bold text-lg lg:text-xl uppercase tracking-widest hover:bg-yellow-400/10 transition-colors"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1, // Speed of typing (0.1s per letter)
            delayChildren: 0.5    // Wait 0.5s before starting
          }
        }
      }}
    >
      {/* Typing Effect Logic */}
      {"VIEW PACKAGES".split("").map((char, index) => (
        <motion.span 
          key={index} 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.button>
</div>

</motion.div>
              
            </div>
            <div className="lg:col-span-5 hidden lg:flex flex-col gap-6 justify-end pb-8">
              <div className="flex gap-4 overflow-hidden">
                {slides.map((slide, index) => {
                  if (index === currentIndex) return null;
                  return (
                    <motion.div key={slide.id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} onClick={() => setCurrentIndex(index)} className="w-32 h-48 lg:w-48 lg:h-64 rounded-2xl overflow-hidden relative cursor-pointer group border border-white/20 shadow-2xl flex-shrink-0 hover:border-blue-500 transition-colors">
                      <img src={slide.img} alt={slide.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      {/* Optional: Removed 'transition-colors' from here if you wanted the thumbnails static too, but kept for now as usually desired */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute bottom-4 left-4 text-white"><p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-300">{slide.subtitle}</p><h4 className="text-lg lg:text-xl font-bold">{slide.title}</h4></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- HANDPICKED TOURS --- */}
      <section className="py-16 lg:py-24 container mx-auto px-6 bg-white">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Curated</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-slate-900">Handpicked tours worldwide</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-light leading-relaxed">Browse destinations carefully selected for quality and authenticity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div 
            onClick={() => router.push('/collections')} 
            className="group relative overflow-hidden rounded-2xl h-80 lg:h-96 cursor-pointer border border-slate-100 shadow-sm"
          >
            <img src="/collections/browse.webp" alt="Browse Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Browse our collection</h3>
              <p className="text-slate-200 mb-4 font-light text-sm">From mountain treks to coastal escapes.</p>
              <button className="flex items-center gap-2 font-semibold text-blue-400 hover:text-white transition group/btn text-sm lg:text-base">
                  Discover Escapes <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div 
            onClick={() => router.push('/rent-vehicle')} 
            className="group relative overflow-hidden rounded-2xl h-80 lg:h-96 cursor-pointer border border-slate-100 shadow-sm"
          >
            <img src="/collections/Reseve.webp" alt="Vehicle Rentals" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Flexible vehicle rentals</h3>
              <p className="text-slate-200 mb-4 font-light text-sm">Choose from sedans to SUVs.</p>
              <button className="flex items-center gap-2 font-semibold text-blue-400 hover:text-white transition group/btn text-sm lg:text-base">
                View options <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div 
            onClick={() => router.push('/tour-packages')}
            className="group relative overflow-hidden rounded-2xl h-80 lg:h-96 cursor-pointer border border-slate-100 shadow-sm"
          >
            <img src="/collections/tour.webp" alt="Reserve Tour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Reserve your tour</h3>
              <p className="text-slate-200 mb-4 font-light text-sm">Secure payment and instant confirmation.</p>
              <button className="flex items-center gap-2 font-semibold text-blue-400 hover:text-white transition group/btn text-sm lg:text-base">
                Check booking availability <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- FEATURED TOURS --- */}
      <section className="py-16 lg:py-24 border-y border-slate-100 bg-gray-50">
        <div className="container mx-auto px-6 mb-12 lg:mb-16 text-center lg:text-left">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Popular</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-slate-900">Experience Sri Lanka</h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row min-h-[500px] md:h-[75vh] w-full gap-4 md:gap-2 overflow-hidden md:shadow-lg md:rounded-xl">
            {[
              { days: "8 days", title: "Everlasting Summer", tag: "Around the island", img: "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?auto=format&fit=crop&q=80&w=800" },
              { days: "7 days", title: "Experiential East", tag: "Enchanting escapade", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000" },
              { days: "12 days", title: "Sustainable Luxury", tag: "Luxe serenity", img: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&q=80&w=800" }
            ].map((item, idx) => (
              <div key={idx} className="relative flex-1 h-80 md:h-auto rounded-xl md:rounded-none group overflow-hidden cursor-pointer transition-all duration-700 ease-in-out md:hover:flex-[2.5]">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={item.title} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white">
                  <span className="text-sm lg:text-base italic font-serif mb-2 text-blue-300">{item.days}</span>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 leading-tight group-hover:font-extrabold transition-all">{item.title}</h2>
                  <div className="flex items-center gap-2 mb-4 lg:mb-6">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-100">{item.tag}</span>
                  </div>
                  <div className="border-t border-white/20 pt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    <button className="flex items-center gap-2 text-[10px] lg:text-[11px] uppercase tracking-widest font-bold hover:text-blue-300 transition">
                      View Itinerary <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRAVEL SOLUTIONS SECTION --- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row min-h-auto lg:min-h-[600px] w-full items-stretch gap-12">
            <div className="lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 lg:mb-8 text-slate-900">
                The Perfect <br />
                <span className="text-blue-600 italic underline decoration-blue-500/30 underline-offset-8">Travel Solutions</span> <br />
                for You
              </h2>
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
                Bethel Ceylon Travels and Tours ensures an unforgettable journey with personalized packages for leisure, adventure, and wellness.
              </p>
              <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
                <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-b-2 border-slate-900 pb-2 hover:text-red-600 hover:border-red-600 transition-all">
                  Explore All Solutions <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="lg:w-3/5 flex flex-col md:flex-row gap-4 h-auto md:h-[500px] lg:h-[600px]">
              {[
                { title: "Leisure", tag: "Relax and explore.", img: "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?auto=format&fit=crop&q=80&w=800" },
                { title: "Adventure", tag: "Dive into traditions.", img: "https://images.unsplash.com/photo-1734279135113-8bd58bc02b69?auto=format&fit=crop&q=80&w=800" },
                { title: "Wellness", tag: "Ayurveda Retreats", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" }
              ].map((item, idx) => (
                <div key={idx} className="relative flex-1 h-64 md:h-auto group overflow-hidden transition-all duration-700 ease-in-out md:hover:flex-[2] cursor-pointer rounded-xl shadow-md border border-slate-100">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0"></div>
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white z-20">
                    <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] font-bold mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- VEHICLES SECTION --- */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Premium Fleet</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-6 text-slate-900">Drive where the road takes you</h2>
            <p className="text-slate-600 text-base lg:text-lg mb-8 font-light leading-relaxed">
              Pick the car that fits your journey. From compact sedans to spacious SUVs, we have what you need at prices that won't surprise you.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition duration-300 shadow-md">Reserve</button>
            </div>
          </div>
          <div className="lg:w-1/2 relative group w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <img src="/collections/drive.webp" alt="Car Rental" className="relative rounded-2xl shadow-xl w-full transition duration-700" />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden font-sans">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Side: Images */}
            <div className="w-full lg:w-1/2 relative">
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={activeTestimonial.img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 gap-3 lg:gap-4"
                >
                  <div className="col-span-2 h-[250px] md:h-[400px] rounded-sm overflow-hidden shadow-lg">
                    <img src={activeTestimonial.img} alt="Travel Moments" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[150px] md:h-[250px] rounded-sm overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1494137319847-a9592a0e73ed?auto=format&fit=crop&q=80&w=600" alt="Adventure" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[150px] md:h-[250px] rounded-sm overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=600" alt="Scenic View" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h4 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">Our guests share their <br /> thoughts</h4>
              <h5 className="text-lg lg:text-xl font-light text-slate-400 mb-8 lg:mb-10 tracking-wide">Testimonials</h5>
              
              <div className="relative min-h-[250px] lg:min-h-[200px]"> {/* Fixed height to prevent layout shift */}
                <span className="text-pink-600 text-6xl lg:text-7xl font-serif absolute -top-8 lg:-top-10 left-0 lg:-left-4 opacity-30 italic hidden lg:block">“</span>
                
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-slate-700 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 lg:pl-8 font-light italic">
                      "{activeTestimonial.text}"
                    </p>
                    <div className="lg:pl-8">
                      <p className="text-pink-600 font-bold text-xs lg:text-sm uppercase tracking-[0.2em]">
                        {activeTestimonial.name} <span className="text-slate-400 font-light ml-2">{activeTestimonial.country}</span>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 lg:mt-12 justify-center lg:justify-start lg:pl-8">
                <button 
                  onClick={handlePrevTestimonial}
                  className="p-3 lg:p-4 border border-slate-200 rounded-full text-slate-400 hover:bg-pink-600 hover:text-white transition-all shadow-sm group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleNextTestimonial}
                  className="p-3 lg:p-4 bg-[#D4E157] text-white rounded-full hover:bg-pink-600 transition-all shadow-md group"
                >
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ANIMATED STATS SECTION --- */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
             <span className="text-green-500 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Success Team</span>
             <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">Our Head Team</h2>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
              <StatItem target={2} label="Years Experience" sub="In the industry" suffix="Y" />
              <StatItem target={115} label="Product Crafting" sub="Successful projects" />
              <StatItem target={50} label="Destinations" sub="Global reach" />
              <StatItem target={40} label="Team Worker" sub="Dedicated professionals" suffix="" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[100] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-green-500/50" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

    </div>
  );
}