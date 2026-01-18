'use client';
import React from 'react';
import { motion } from 'framer-motion'; 
import { MapPin, Calendar, Star, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- EXPANDED DATA: 12 Beautiful Places in Sri Lanka ---
const destinations = [
  { 
    title: "Sigiriya Lion Rock", 
    region: "Central Province",
    bestTime: "January - April",
    highlights: ["Ancient Frescoes", "Mirror Wall", "Summit Views"],
    desc: "Rise above the jungle canopy at the Eighth Wonder of the World. Sigiriya is an ancient rock fortress dominated by a massive column of rock nearly 200 meters high. It is a UNESCO World Heritage site, famous for its palace ruins on top of a massive 200-meter high rock surrounded by the remains of an extensive network of gardens, reservoirs, and other structures.", 
    img: "https://images.unsplash.com/photo-1539576776193-2c07122e5fee?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    title: "Ella & Nine Arches", 
    region: "Badulla District",
    bestTime: "March - June",
    highlights: ["Nine Arches Bridge", "Little Adam's Peak", "Tea Plantations"],
    desc: "Ella is a small, laid-back town surrounded by the beautiful greens of tea. It is the perfect place to relax and cool off. The iconic Nine Arches Bridge, built entirely of brick, rock, and cement without a single piece of steel, is a marvel of engineering set amidst dense jungle and tea plantations.", 
    img: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    title: "Mirissa Beach", 
    region: "Southern Province",
    bestTime: "November - April",
    highlights: ["Whale Watching", "Coconut Tree Hill", "Surfing"],
    desc: "Mirissa is one of the main beach destinations in southern Sri Lanka. The area has it all, beautiful Sri Lankan beaches, surf waves, whale watching, and great bars and restaurants. It is often the place where travelers linger longer than intended, captivated by the stunning sunsets and relaxed vibe.", 
    img: "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    title: "Galle Dutch Fort", 
    region: "Southern Coast",
    bestTime: "December - April",
    highlights: ["Lighthouse", "Cobblestone Streets", "Colonial Architecture"],
    desc: "A UNESCO World Heritage site, the Galle Fort is a trendy place to enjoy the architecture, history, shopping, and food. Walking through the streets of Galle Fort is like stepping back in time, with its Dutch-colonial buildings, ancient mosques, and grand churches.", 
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2639&auto=format&fit=crop" 
  },
  { 
    title: "Yala National Park", 
    region: "Southeast",
    bestTime: "February - July",
    highlights: ["Leopards", "Elephants", "Safari Camping"],
    desc: "Yala combines a strict nature reserve with a national park. Divided into 5 blocks, the park has a protected area of nearly 130,000 hectares of land consisting of light forests, scrubs, grasslands, tanks, and lagoons. It is best known for its variety of wild animals and is important for the conservation of Sri Lankan elephants, Sri Lankan leopards, and aquatic birds.", 
    img: "https://images.unsplash.com/photo-1625633857639-6ee39174955c?q=80&w=2574&auto=format&fit=crop" 
  },
  { 
    title: "Kandy", 
    region: "Central Highlands",
    bestTime: "December - April",
    highlights: ["Temple of the Tooth", "Kandy Lake", "Botanical Gardens"],
    desc: "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city's heart is scenic Kandy Lake (Bogambara Lake). Kandy is famous for the Temple of the Tooth (Sri Dalada Maligawa), one of the most sacred places of worship in the Buddhist world.", 
    img: "https://images.unsplash.com/photo-1625413182602-0c9a59b02a21?q=80&w=2574&auto=format&fit=crop" 
  },
  { 
    title: "Nuwara Eliya", 
    region: "Central Province",
    bestTime: "February - May",
    highlights: ["Gregory Lake", "Tea Factories", "Victoria Park"],
    desc: "Often referred to as 'Little England', this genteel highland community does have a rose-tinted, vaguely British-country-village feel to it, with its colonial-era bungalows, Tudor-style hotels, well-tended hedgerows, and pretty gardens. It is the heart of the tea industry in Sri Lanka.", 
    img: "https://images.unsplash.com/photo-1598516802613-207d72242133?q=80&w=2574&auto=format&fit=crop" 
  },
  { 
    title: "Polonnaruwa", 
    region: "North Central",
    bestTime: "May - September",
    highlights: ["Gal Vihara", "Royal Palace", "Parakrama Samudra"],
    desc: "Polonnaruwa was the second capital of Sri Lanka after the destruction of Anuradhapura in 993. It comprises, besides the Brahmanic monuments built by the Cholas, the monumental ruins of the fabulous garden-city created by Parakramabahu I in the 12th century.", 
    img: "https://images.unsplash.com/photo-1606213766668-0720d2d32890?q=80&w=2671&auto=format&fit=crop" 
  },
  { 
    title: "Arugam Bay", 
    region: "East Coast",
    bestTime: "May - September",
    highlights: ["Surfing", "Lagoon Safari", "Elephant Rock"],
    desc: "Arugam Bay is known as one of the best surf spots in the world. It is a moon-shaped curl of soft sand, home to a legendary point break that many regard as the best surf spot in the country. It's a tiny place, with a pop-up vibe and a very relaxed atmosphere.", 
    img: "https://images.unsplash.com/photo-1491752706342-d6b334b3dc04?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    title: "Horton Plains", 
    region: "Central Highlands",
    bestTime: "January - March",
    highlights: ["World's End", "Baker's Falls", "Sambar Deer"],
    desc: "Horton Plains National Park is a protected area in the central highlands of Sri Lanka and is covered by montane grassland and cloud forest. This plateau at an altitude of 2,100–2,300 metres is rich in biodiversity and many species found here are endemic to the region.", 
    img: "https://images.unsplash.com/photo-1593026315233-a3674d688049?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    title: "Trincomalee", 
    region: "East Coast",
    bestTime: "May - October",
    highlights: ["Nilaveli Beach", "Koneswaram Temple", "Pigeon Island"],
    desc: "Trincomalee is a port city on the northeast coast of Sri Lanka. Set on a peninsula, Fort Frederick was built by the Portuguese in the 17th century. Within its grounds, the grand Koneswaram Temple stands on Swami Rock cliff, a popular vantage point for blue-whale watching.", 
    img: "https://images.unsplash.com/photo-1580802102875-139367fb379c?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    title: "Adam's Peak", 
    region: "Sabaragamuwa",
    bestTime: "December - May",
    highlights: ["Sunrise View", "Sacred Footprint", "Hiking"],
    desc: "Adam's Peak is a 2,243 m tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, i.e., 'sacred footprint', a 1.8 m rock formation near the summit, which in Buddhist tradition is held to be the footprint of the Buddha.", 
    img: "https://images.unsplash.com/photo-1460378377930-38815f20a4b6?q=80&w=2574&auto=format&fit=crop" 
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white">
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen flex items-center justify-center bg-black overflow-hidden sticky top-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580226343519-c703c9429787?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-50 scale-105"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.span 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-sm md:text-base font-bold text-yellow-400 uppercase tracking-[0.3em] mb-6 block"
          >
            Discover Paradise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-2xl tracking-tight"
          >
            Explore Sri Lanka
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed"
          >
            A journey through the 12 most iconic destinations of the pearl of the Indian Ocean.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-white/50">Scroll to Explore</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-white to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* --- LONG SCROLLING DESTINATION SECTIONS --- */}
      <div className="relative z-10 bg-slate-900">
        {destinations.map((place, idx) => (
          <section 
            key={idx} 
            className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden"
          >
            {/* Background Image with Parallax-like Fixed feel can be achieved by simple absolute fill per section or sticking to img tag */}
            <div className="absolute inset-0 z-0">
              <img 
                src={place.img} 
                alt={place.title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10"></div>
            </div>

            {/* Content Card */}
            <div className="container mx-auto px-6 relative z-10 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`max-w-5xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Text Content */}
                <div className="md:w-1/2 space-y-6">
                  <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-widest text-xs">
                    <MapPin size={14} />
                    <span>{place.region}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {place.title}
                  </h2>
                  
                  <p className="text-slate-200 text-lg leading-relaxed font-light">
                    {place.desc}
                  </p>

                  <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 text-blue-300 font-semibold mb-2">
                        <Calendar size={18} /> <span>Best Time</span>
                      </div>
                      <p className="text-sm text-slate-300">{place.bestTime}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-green-300 font-semibold mb-2">
                        <Star size={18} /> <span>Highlights</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {place.highlights.map((h, i) => (
                          <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-slate-200">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative / Detail Image (Optional - or keep text only to let bg shine) */}
                <div className="md:w-1/2 hidden md:block">
                   {/* We keep this side transparent or add a smaller detail image to enhance the layout */}
                   <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-lg relative group">
                      <img src={place.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail view" />
                      <div className="absolute inset-0 bg-black/20"></div>
                   </div>
                </div>

              </motion.div>
            </div>
          </section>
        ))}
      </div>

     
    </div>
  );
}