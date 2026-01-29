'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, X, User, Mail, Phone, Globe, Users, Activity, FileText, Send, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "94764136737";

// --- TOUR DATA (Kept same as provided) ---
const tourData: Record<string, any> = {
  "cultural-express": {
    title: "Golden Triangle & Cultural Treasures",
    image: "/tours/cultural-express.webp",
    duration: "05 Nights | 06 Days",
    description: "Immerse yourself in Sri Lanka's rich history, exploring ancient fortresses, temples, and wildlife.",
    highlights: [
      "Boat ride through Negombo Lagoon & mangroves",
      "Climb the UNESCO World Heritage Sigiriya Rock Fortress",
      "Jeep Safari at Minneriya National Park (Elephant Gathering)",
      "Visit the sacred Temple of the Tooth Relic in Kandy",
      "Cultural Dance Performance with traditional music",
      "Stroll through the Royal Botanical Gardens in Peradeniya"
    ],
    itinerary: [
      { 
        day: "Day 1", 
        title: "Arrival in Negombo", 
        desc: "Arrive in Sri Lanka and receive a warm welcome at the international airport before transferring to your hotel in Negombo. After checking in, enjoy some time to relax after your journey. In the evening, take a peaceful lagoon boat ride through mangroves and traditional fishing villages, followed by a leisurely walk along Negombo Beach to admire a beautiful sunset over the Indian Ocean. Overnight stay in Negombo."
      },
      { 
        day: "Day 2", 
        title: "Negombo – Sigiriya (150 km / 3.5 hrs)", 
        desc: "After breakfast, depart for Sigiriya, traveling through scenic countryside landscapes. Upon arrival, check in to your hotel and relax. In the afternoon, visit the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site dating back to the 5th century. Marvel at the ancient frescoes, mirror wall, lion terrace, and beautifully landscaped water gardens as you climb to the summit for breathtaking views. In the evening, enjoy a traditional village tour, experiencing rural Sri Lankan life, local cuisine, and culture. Overnight stay in Sigiriya."
      },
      { 
        day: "Day 3", 
        title: "Sigiriya – Minneriya Safari", 
        desc: "Start the day with breakfast before heading to Minneriya National Park for an exciting jeep safari. The park is famous for its large herds of wild elephants, especially during the “Gathering,” as well as deer, birds, and other wildlife. Enjoy the natural beauty of the park’s grasslands and reservoir. After the safari, return to Sigiriya and spend the rest of the day at leisure, relaxing at your hotel or exploring the surroundings. Overnight stay in Sigiriya."
      },
      { 
        day: "Day 4", 
        title: "Sigiriya – Kandy (90 km / 2.5 hrs)", 
        desc: "After breakfast, depart for Kandy, the cultural capital of Sri Lanka. En route, you may stop at local spice gardens to learn about Sri Lanka’s famous spices and herbs. Upon arrival in Kandy, visit the sacred Temple of the Tooth Relic, one of the most important Buddhist pilgrimage sites in the world. In the evening, enjoy a vibrant cultural dance performance showcasing traditional Kandyan music and dance. Overnight stay in Kandy."
      },
      { 
        day: "Day 5", 
        title: "Kandy – Negombo (110 km / 3 hrs)", 
        desc: "After breakfast, visit the Royal Botanical Gardens in Peradeniya, renowned for its extensive collection of orchids, tropical plants, and towering palms. Later, begin your journey back to Negombo, enjoying scenic views along the way. Upon arrival, check in to your hotel and enjoy your final evening at leisure, perhaps exploring the beach or local markets. Overnight stay in Negombo."
      },
      { 
        day: "Day 6", 
        title: "Departure", 
        desc: "After breakfast, check out from the hotel and transfer to the airport for your departure, carrying unforgettable memories of Sri Lanka’s ancient heritage, wildlife, and cultural treasures."
      }
    ]
  },
  "adventure-tours": {
    title: "Tea Trails & Hill Country Escape",
    image: "/tours/hill-country.webp",
    duration: "06 Nights | 07 Days",
    description: "A journey through misty tea plantations, scenic train rides, and wildlife encounters.",
    highlights: [
      "Visit Negombo Fish Market & Sunset Beach Walk",
      "Kandy City Tour & Temple of the Tooth",
      "Tea Factory Visit & Tea Tasting in Nuwara Eliya",
      "Scenic Train Ride through the Hill Country",
      "Visit Nine Arches Bridge & Hike Little Adam’s Peak",
      "Udawalawe National Park Elephant Safari"
    ],
    itinerary: [
      { 
        day: "Day 1", 
        title: "Arrival – Negombo", 
        desc: "Arrive at Bandaranaike International Airport and meet your representative before transferring to your hotel in Negombo. After check-in, take some time to relax from your journey. Later, visit the lively local fish market to witness the day’s catch and experience local life. In the evening, enjoy a leisurely walk along Negombo Beach, watching the sunset over the Indian Ocean. Overnight stay in Negombo."
      },
      { 
        day: "Day 2", 
        title: "Negombo – Kandy (110 km / 3 hrs)", 
        desc: "After breakfast, depart for Kandy, traveling through scenic countryside and hill landscapes. Upon arrival, enjoy a city tour of Kandy, including visits to local markets and viewpoints. Later, visit the sacred Temple of the Tooth Relic, one of the most important Buddhist pilgrimage sites in the world. In the evening, you may witness an evening pooja at the temple. Overnight stay in Kandy."
      },
      { 
        day: "Day 3", 
        title: "Kandy – Nuwara Eliya (80 km / 3 hrs)", 
        desc: "After breakfast, proceed to Nuwara Eliya, known as “Little England,” passing lush tea plantations and misty hills. En route, visit a tea factory to learn about Sri Lanka’s world-famous Ceylon tea and enjoy a tea tasting session. Upon arrival in Nuwara Eliya, visit Gregory Lake and enjoy the cool climate and colonial charm of the town. Overnight stay in Nuwara Eliya."
      },
      { 
        day: "Day 4", 
        title: "Nuwara Eliya – Ella (by Train)", 
        desc: "After breakfast, transfer to the railway station to board one of the world’s most scenic train journeys. Enjoy breathtaking views of rolling tea estates, waterfalls, valleys, and charming hill country villages during the train ride to Ella. Upon arrival, visit the iconic Nine Arches Bridge and, if time permits, enjoy a short hike to Little Adam’s Peak for panoramic views. Overnight stay in Ella."
      },
      { 
        day: "Day 5", 
        title: "Ella – Udawalawa (90 km / 2.5 hrs)", 
        desc: "After breakfast, depart Ella for Udawalawa, descending from the hill country into Sri Lanka’s dry zone. Along the way, admire changing landscapes and rural villages. Upon arrival, enjoy an exciting jeep safari at Udawalawa National Park, famous for its large population of wild elephants as well as birds, deer, and other wildlife. Overnight stay near Udawalawa."
      },
      { 
        day: "Day 6", 
        title: "Udawalawa – Negombo (180 km / 4.5 hrs)", 
        desc: "After breakfast, begin the journey back to Negombo. Enjoy scenic views of countryside, plantations, and local towns along the way. Upon arrival in Negombo, check in to your hotel and spend the rest of the day at leisure, relaxing by the beach or exploring nearby shops. Overnight stay in Negombo."
      },
      { 
        day: "Day 7", 
        title: "Departure", 
        desc: "After breakfast, check out from the hotel and transfer to the airport for your departure, taking with you unforgettable memories of Sri Lanka’s hill country, tea trails, scenic train rides, and wildlife experiences."
      }
    ]
  },
  "classic-deluxe": {
    title: "Waves & Wildlife",
    image: "/tours/eco.webp",
    duration: "07 Nights | 08 Days",
    description: "The perfect mix of beach relaxation, whales, and leopard safaris.",
    highlights: [
      "Sunset viewing by the Indian Ocean in Negombo",
      "Water sports activities in Bentota",
      "Explore UNESCO Galle Dutch Fort",
      "Whale watching tour in Mirissa",
      "Leopard Safari at Yala National Park",
      "Relax by Tissamaharama Lake"
    ],
    itinerary: [
      { 
        day: "Day 1", 
        title: "Arrival in Negombo", 
        desc: "Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. Spend the evening relaxing by the beach and enjoy a beautiful sunset by the Indian Ocean, easing into the tropical rhythm of Sri Lanka."
      },
      { 
        day: "Day 2", 
        title: "Negombo to Bentota", 
        desc: "After breakfast, travel along the scenic coastal route to Bentota. Enjoy a water sports experience or simply relax by the beach, surrounded by palm trees and ocean breezes."
      },
      { 
        day: "Day 3", 
        title: "Bentota to Galle", 
        desc: "Visit the historic coastal city of Galle. Explore the UNESCO-listed Galle Fort, colonial streets, and local markets, experiencing the blend of European architecture and Sri Lankan culture."
      },
      { 
        day: "Day 4", 
        title: "Galle to Mirissa", 
        desc: "Proceed to Mirissa, a laid-back beach town famous for whale watching. Spend time relaxing on the beach and enjoying the peaceful coastal atmosphere."
      },
      { 
        day: "Day 5", 
        title: "Mirissa to Yala", 
        desc: "Journey inland to Yala. In the afternoon, embark on an exciting safari at Yala National Park, renowned for its leopards, elephants, and diverse wildlife."
      },
      { 
        day: "Day 6", 
        title: "Yala to Tissamaharama", 
        desc: "After breakfast, travel to Tissamaharama. Enjoy leisure time by the lake or relax at your hotel, surrounded by tranquil natural scenery."
      },
      { 
        day: "Day 7", 
        title: "Tissamaharama to Negombo", 
        desc: "Travel back to Negombo through scenic countryside routes. Enjoy your final evening with beach leisure or a relaxed dinner."
      },
      { 
        day: "Day 8", 
        title: "Departure", 
        desc: "Transfer to the airport for your onward journey, taking home unforgettable memories of Sri Lanka’s beaches and wildlife."
      }
    ]
  },
  "beach-splash": {
    title: "Luxury Sri Lanka Signature",
    image: "/tours/luxury-srilanka.jpg",
    duration: "09 Nights | 10 Days",
    description: "Experience the finest luxury resorts, private safaris, and exclusive train journeys.",
    highlights: [
      "Luxury Sunset Dinner in Negombo",
      "Sigiriya Rock Fortress Climb",
      "Private Minneriya Elephant Safari",
      "Luxury Spa & Cultural Show in Kandy",
      "Luxury Train Ride to Ella with Private Picnic",
      "Yala National Park Safari"
    ],
    itinerary: [
      { 
        day: "Day 1", 
        title: "Arrival in Negombo", 
        desc: "Arrive in Sri Lanka and transfer to a luxury hotel in Negombo. Enjoy a sunset dinner by the beach and unwind after your journey."
      },
      { 
        day: "Day 2", 
        title: "Negombo to Sigiriya", 
        desc: "Travel to Sigiriya, passing scenic countryside landscapes. Settle into your luxury resort and enjoy a relaxed evening."
      },
      { 
        day: "Day 3", 
        title: "Sigiriya & Minneriya Safari", 
        desc: "Climb the iconic Sigiriya Rock Fortress in the morning. In the afternoon, experience a private safari at Minneriya National Park, famous for its elephant gatherings."
      },
      { 
        day: "Day 4", 
        title: "Sigiriya to Kandy", 
        desc: "Journey to Kandy, visiting cultural sites en route. Enjoy a spa session and witness a vibrant evening cultural dance performance."
      },
      { 
        day: "Day 5", 
        title: "Kandy to Nuwara Eliya", 
        desc: "Travel through lush tea plantations to Nuwara Eliya. Experience the charm of Sri Lanka’s hill country with cool weather and colonial-style surroundings."
      },
      { 
        day: "Day 6", 
        title: "Nuwara Eliya to Ella", 
        desc: "Enjoy a luxury train ride through misty mountains and waterfalls. Arrive in Ella and relax with a private picnic amidst nature."
      },
      { 
        day: "Day 7", 
        title: "Ella to Yala", 
        desc: "Depart for Yala and enjoy an afternoon safari at Yala National Park, spotting wildlife in its natural habitat."
      },
      { 
        day: "Day 8", 
        title: "Yala to Bentota", 
        desc: "Travel to Bentota and unwind at a luxury beach resort, enjoying sun, sea, and serenity."
      },
      { 
        day: "Day 9", 
        title: "Bentota to Negombo", 
        desc: "Enjoy beach leisure before returning to Negombo for your final overnight stay."
      },
      { 
        day: "Day 10", 
        title: "Departure", 
        desc: "Transfer to the airport for departure, concluding your luxury Sri Lankan experience."
      }
    ]
  },
  "grand-classic": {
    title: "Ancient Wonders & Wellness",
    image: "/tours/ancient-wonders.webp",
    duration: "06 Nights | 07 Days",
    description: "Rejuvenate your mind and body while exploring UNESCO World Heritage sites.",
    highlights: [
      "Ayurveda Wellness Treatments",
      "Explore Anuradhapura Ancient City Ruins",
      "Visit Mihintale (Birthplace of Buddhism)",
      "Sigiriya Rock Fortress Climb",
      "Minneriya National Park Safari",
      "Temple of the Tooth Relic Visit"
    ],
    itinerary: [
      { 
        day: "Day 1", 
        title: "Arrival in Negombo", 
        desc: "Arrive and transfer to your hotel in Negombo. Relax and recover from your journey. Transfer to an Ayurveda hotel in Negombo for relaxation & wellness treatments."
      },
      { 
        day: "Day 2", 
        title: "Negombo to Anuradhapura", 
        desc: "Travel to the ancient city of Anuradhapura. Explore sacred stupas, ancient monasteries, and historical ruins (UNESCO World Heritage site)."
      },
      { 
        day: "Day 3", 
        title: "Anuradhapura – Mihintale – Sigiriya", 
        desc: "Visit Mihintale, the birthplace of Buddhism in Sri Lanka, before continuing to Sigiriya for an overnight stay."
      },
      { 
        day: "Day 4", 
        title: "Sigiriya & Minneriya Safari", 
        desc: "Climb the Sigiriya Rock Fortress in the morning. In the afternoon, enjoy a safari at Minneriya National Park."
      },
      { 
        day: "Day 5", 
        title: "Sigiriya to Kandy", 
        desc: "Travel to Kandy and visit the Temple of the Sacred Tooth Relic, one of Buddhism’s most important shrines. Enjoy a relaxing spa session."
      },
      { 
        day: "Day 6", 
        title: "Kandy to Negombo", 
        desc: "Return to Negombo, enjoying scenic views along the way. Relax during your final evening."
      },
      { 
        day: "Day 7", 
        title: "Departure", 
        desc: "Transfer to the airport for departure."
      }
    ]
  },
  "wildlife-nature": {
    title: "Adventure Sri Lanka",
    image:  "/tours/adven.webp",
    duration: "08 Nights | 09 Days",
    description: "Thrilling rafting, mountain trekking, and wild safaris for the adventurous soul.",
    highlights: [
      "White Water Rafting in Kitulgala",
      "Mountain Camping in Knuckles Range",
      "Trekking through Waterfalls & Remote Villages",
      "Hike Ella Rock & Visit Nine Arches Bridge",
      "Yala National Park Wildlife Safari",
      "Beach Relaxation in Bentota"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo", desc: "Arrive in Sri Lanka and transfer to your hotel. Rest and prepare for adventure." },
      { day: "Day 2", title: "Negombo to Kitulgala", desc: "Travel to Kitulgala and experience thrilling white-water rafting amidst lush rainforest surroundings." },
      { day: "Day 3", title: "Kitulgala to Knuckles", desc: "Proceed to the Knuckles Mountain Range, enjoying breathtaking views and mountain landscapes. Mountain camping experience." },
      { day: "Day 4", title: "Knuckles Trekking", desc: "Spend the day trekking through the Knuckles region, encountering waterfalls, forests, and remote villages." },
      { day: "Day 5", title: "Knuckles to Ella", desc: "Travel to Ella and relax after your mountain adventure." },
      { day: "Day 6", title: "Ella Sightseeing", desc: "Visit Ella Rock, Nine Arches Bridge, and Ravana Falls, enjoying scenic hikes and photo opportunities." },
      { day: "Day 7", title: "Ella to Yala", desc: "Travel to Yala and enjoy an exciting wildlife safari in the national park." },
      { day: "Day 8", title: "Yala to Bentota", desc: "Head to Bentota for beach relaxation after days of adventure." },
      { day: "Day 9", title: "Departure", desc: "Return to Negombo and transfer to the airport." }
    ]
  },
  "romantic-gateway": {
    title: "Honeymoon in Paradise",
    image:  "/tours/honeymoonn.webp",
    duration: "06 Nights | 07 Days",
    description: "A dreamy getaway with romantic beaches, candlelight dinners, and scenic escapes.",
    highlights: [
      "Romantic Beach Villa Stay",
      "Candlelight Dinner & Water Sports in Bentota",
      "Explore Historic Galle Fort",
      "Romantic Wildlife Safari in Udawalawe",
      "Scenic Tea Plantations in Nuwara Eliya"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo", desc: "Arrive and transfer to a romantic beachside hotel. Enjoy private time together by the ocean." },
      { day: "Day 2", title: "Negombo to Bentota", desc: "Travel to Bentota and enjoy water sports and a candlelight dinner by the beach." },
      { day: "Day 3", title: "Bentota to Galle", desc: "Explore the charming streets of Galle Fort and enjoy a scenic coastal experience." },
      { day: "Day 4", title: "Galle to Udawalawe", desc: "Travel to Udawalawe and enjoy a romantic wildlife safari in the national park." },
      { day: "Day 5", title: "Udawalawe to Nuwara Eliya", desc: "Journey to the hill country, surrounded by tea plantations and cool climates." },
      { day: "Day 6", title: "Nuwara Eliya to Negombo", desc: "Return to Negombo for your final overnight stay." },
      { day: "Day 7", title: "Departure", desc: "Transfer to the airport, concluding your honeymoon journey." }
    ]
  },
  "wellness-ayurvedic": {
    title: "Eco & Nature Trails",
    image: "/tours/ancient.webp",
    duration: "07 Nights | 08 Days",
    description: "Reconnect with nature in rainforests and eco-retreats.",
    highlights: [
      "Sinharaja Rainforest (UNESCO) Visit",
      "Morning Nature Walk",
      "Udawalawe National Park Elephant Safari",
      "Yala National Park Safari",
      "Explore Historic Galle Fort"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo", desc: "Arrive in Sri Lanka and transfer to your hotel. Relax and prepare for your nature adventure." },
      { day: "Day 2", title: "Negombo to Sinharaja", desc: "Travel to the Sinharaja Rainforest, a UNESCO World Heritage Site rich in biodiversity." },
      { day: "Day 3", title: "Sinharaja to Udawalawe", desc: "Enjoy a morning nature walk before proceeding to Udawalawe." },
      { day: "Day 4", title: "Udawalawe Safari", desc: "Experience an exciting safari at Udawalawe National Park, famous for its elephants." },
      { day: "Day 5", title: "Udawalawe to Yala", desc: "Travel to Yala and enjoy another wildlife safari in a different ecosystem." },
      { day: "Day 6", title: "Yala to Galle", desc: "Proceed to Galle and explore its historic fort and coastal charm." },
      { day: "Day 7", title: "Galle to Negombo", desc: "Return to Negombo, enjoying scenic coastal views." },
      { day: "Day 8", title: "Departure", desc: "Transfer to the airport for your onward journey." }
    ]
  },
  "gems-wellness": {
    title: "Gems, Nature & Ayurveda",
    image: "/tours/rathnapura.webp",
    duration: "05 Nights | 06 Days",
    description: "Discover the City of Gems, lush rainforests, and holistic Ayurveda wellness.",
    highlights: [
      "Visit 'City of Gems' Ratnapura",
      "Gem Mines & Museum Tour",
      "Bopath Ella Waterfall Visit",
      "Sinharaja Rainforest Trekking",
      "Udawalawe National Park Safari",
      "Ayurvedic Spa Treatment in Colombo"
    ],
    itinerary: [
      { day: "Day 1", title: "Negombo to Ratnapura", desc: "Travel inland to Ratnapura, the world-famous 'City of Gems'. Enjoy a scenic drive through lush landscapes and river valleys. Upon arrival, check in to your hotel and relax amid the tranquil surroundings of Sri Lanka’s gem country." },
      { day: "Day 2", title: "Ratnapura City Tour & Gem Experience", desc: "Explore the cultural and natural highlights of Ratnapura. Visit the Gem Museum to learn about Sri Lanka’s precious stones, followed by an authentic visit to traditional gem mines. Later, enjoy a refreshing stop at the beautiful Bopath Ella Waterfall, surrounded by greenery and fresh mountain air." },
      { day: "Day 3", title: "Ratnapura to Sinharaja Rainforest", desc: "Travel to the Sinharaja Rainforest, a UNESCO World Heritage Site and biodiversity hotspot. Enjoy guided trekking through dense rainforest trails, discovering rare flora, endemic birds, and unique wildlife in one of Sri Lanka’s last remaining primary rainforests." },
      { day: "Day 4", title: "Sinharaja to Udawalawe", desc: "After breakfast, depart Sinharaja and journey to Udawalawe. In the evening, embark on an exciting safari at Udawalawe National Park, famous for large herds of elephants, water buffalo, and diverse birdlife." },
      { day: "Day 5", title: "Udawalawe to Colombo – Ayurveda", desc: "Proceed to Colombo, Sri Lanka’s vibrant capital. In the evening, unwind with a rejuvenating Ayurvedic spa and wellness treatment designed to relax the body, calm the mind, and restore balance after your adventures." },
      { day: "Day 6", title: "Departure", desc: "Travel to Negombo for your departure. Leave Sri Lanka with enriching memories of gemstones, rainforests, wildlife, and holistic wellness." }
    ]
  }
};

// --- ANIMATION VARIANTS ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function TourDetail() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const tour = slug && tourData[slug] ? tourData[slug] : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", whatsapp: "", country: "",
    adults: "2", children: "0",
    arrivalDate: "", departureDate: "", days: "",
    activities: [] as string[], accommodation: "4 Star Hotel",
    requests: "", notes: ""
  });

  if (!tour) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
        <h1 className="text-xl md:text-2xl font-bold">Tour Package Not Found</h1>
        <a href="/tour-packages" className="mt-4 text-blue-400 underline">Return to Packages</a>
      </div>
    );
  }

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `
*New Tour Booking Request*
---------------------------
*Package:* ${tour.title}
*Name:* ${formData.name}
*Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
*Country:* ${formData.country}
*Travelers:* ${formData.adults} Adults, ${formData.children} Children
*Dates:* ${formData.arrivalDate} to ${formData.departureDate} (${formData.days} Days)
*Accommodation:* ${formData.accommodation}
*Activities:* ${formData.activities.join(', ')}
*Special Requests:* ${formData.requests}
*Notes:* ${formData.notes}
    `.trim();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const toggleActivity = (activity: string) => {
    setFormData(prev => 
      prev.activities.includes(activity)
        ? { ...prev, activities: prev.activities.filter(a => a !== activity) }
        : { ...prev, activities: [...prev.activities, activity] }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 overflow-x-hidden">
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn} 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg"
          >
            {tour.title}
          </motion.h1>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col md:flex-row gap-2 md:gap-4 text-white/90 text-base md:text-lg font-medium">
            <span className="flex items-center justify-center gap-2"><Clock size={18} /> {tour.duration}</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center justify-center gap-2"><MapPin size={18} /> Sri Lanka</span>
          </motion.div>
        </div>
      </div>

      {/* --- CONTENT --- */}
      {/* Added pb-24 for mobile to account for sticky bottom button */}
      <div className="container mx-auto px-6 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-24 md:pb-16">
        
        {/* Left: Highlights & Itinerary */}
        <div className="lg:col-span-2">
          
          {/* Highlights Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-800 border-b pb-3 md:pb-4">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {tour.highlights && tour.highlights.map((highlight: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                  <Star size={18} className="text-yellow-500 fill-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-800 border-b pb-3 md:pb-4">Detailed Itinerary</h2>
          <div className="space-y-6 md:space-y-8">
            {tour.itinerary.map((item: any, i: number) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                key={i} className="flex gap-3 md:gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm md:text-base font-bold shadow-lg flex-shrink-0">{i + 1}</div>
                  <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex-grow hover:shadow-md transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-left">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Booking Card (Desktop Sticky) */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Book This Tour</h3>
            <p className="text-gray-500 text-sm mb-6">Customizable & Private</p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-2 border-b"><span className="text-gray-500">Duration</span> <span className="font-bold">{tour.duration}</span></div>
              <div className="flex justify-between py-2 border-b"><span className="text-gray-500">Transport</span> <span className="font-bold">Private A/C Vehicle</span></div>
              <div className="flex justify-between py-2 border-b"><span className="text-gray-500">Guide</span> <span className="font-bold">English Speaking</span></div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Book Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE STICKY BOOKING BAR --- */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex items-center justify-between">
        <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="font-bold text-blue-900">Custom Price</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2"
        >
          Book Now <ArrowRight size={18} />
        </button>
      </div>

      {/* --- BOOKING MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-4 overflow-hidden"
          >
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl w-full md:max-w-2xl h-[90vh] md:h-auto md:max-h-[90vh] overflow-y-auto flex flex-col"
            >
              <div className="p-4 md:p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Plan Your Trip</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
              </div>
              
              <form onSubmit={handleBookSubmit} className="p-4 md:p-8 space-y-4 md:space-y-6 flex-grow overflow-y-auto pb-20 md:pb-8">
                
                {/* Section 1: Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 flex gap-1"><User size={12}/> Full Name</label>
                    <input required type="text" className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 flex gap-1"><Mail size={12}/> Email</label>
                    <input required type="email" className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 flex gap-1"><Phone size={12}/> WhatsApp / Phone</label>
                    <input required type="tel" className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 flex gap-1"><Globe size={12}/> Country</label>
                    <input required type="text" className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" onChange={e => setFormData({...formData, country: e.target.value})} />
                  </div>
                </div>

                {/* Section 2: Trip Details */}
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Users size={18} className="text-blue-600"/> Travel Details</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="text-xs text-gray-500">Adults</label>
                      <input type="number" min="1" value={formData.adults} className="w-full p-2 border rounded-lg" onChange={e => setFormData({...formData, adults: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Children</label>
                      <input type="number" min="0" value={formData.children} className="w-full p-2 border rounded-lg" onChange={e => setFormData({...formData, children: e.target.value})} />
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs text-gray-500">Accommodation</label>
                      <select className="w-full p-2 border rounded-lg bg-white" onChange={e => setFormData({...formData, accommodation: e.target.value})}>
                        <option>3 Star Hotel</option>
                        <option selected>4 Star Hotel</option>
                        <option>5 Star Hotel</option>
                        <option>Boutique Villa</option>
                        <option>Luxury Resort</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs text-gray-500">Arrival</label>
                      <input type="date" className="w-full p-2 border rounded-lg" onChange={e => setFormData({...formData, arrivalDate: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Departure</label>
                      <input type="date" className="w-full p-2 border rounded-lg" onChange={e => setFormData({...formData, departureDate: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Days</label>
                      <input type="number" placeholder="Total Days" className="w-full p-2 border rounded-lg" onChange={e => setFormData({...formData, days: e.target.value})} />
                    </div>
                  </div>
                </div>

                {/* Section 3: Interests */}
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Activity size={18} className="text-blue-600"/> Activities</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Safari", "Hiking", "Beach", "Culture", "Ayurveda", "Train Ride", "Water Sports", "Photography"].map(activity => (
                      <button 
                        key={activity} type="button"
                        onClick={() => toggleActivity(activity)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${formData.activities.includes(activity) ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"}`}
                      >
                        {activity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 4: Notes */}
                <div className="border-t pt-4">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 flex gap-1"><FileText size={12}/> Special Requests</label>
                  <textarea rows={3} placeholder="Any dietary requirements, specific places to visit..." className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" onChange={e => setFormData({...formData, requests: e.target.value})}></textarea>
                </div>

                <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd59] text-white font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                  <span>Send Request via WhatsApp</span>
                  <Send size={20} />
                </button>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
     
    </div>
  );
}