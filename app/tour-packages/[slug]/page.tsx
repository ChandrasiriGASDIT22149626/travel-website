'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, X, User, Mail, Phone, Globe, Activity, FileText, Send,  Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { CheckCircle, Car, Users, Plane, Droplet, ShieldCheck, Languages, Headphones } from 'lucide-react';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "94764136737";

// --- TOUR DATA (Keys match your existing links, Content from Word Doc) ---
const tourData: Record<string, any> = {
  "wildlife-nature": {
    title: "Adventure Sri Lanka",
    image: "/tours/adven.webp",
    duration: "08 Nights | 09 Days",
    description: "From $739 per person (based on 12 pax). Thrilling rafting, mountain trekking, and wild safaris.",
    highlights: [
      "Thrilling white-water rafting in Kitulgala rainforest",
      "Mountain camping and trekking in Knuckles Range",
      "Hike Ella Rock, explore Nine Arches Bridge, and Ravana Falls",
      "Exciting Yala National Park safari to spot leopards, elephants, and exotic birds",
      "Beach relaxation in Bentota with sunset photography",
      "Extra free activities: river tubing, waterfall swimming, village cycling, forest canopy walks, paddy field and tea estate exploration, coastal walks, and photography opportunities",
      "Farewell dinner on the last night to celebrate your adventure"

    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo (35 km / 45 min from airport)", desc: "Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. Relax and recover from your journey. In the evening, enjoy a sunset walk along Negombo Beach, take a stroll around Negombo Lagoon, or explore the Dutch Fort ruins. - Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Kitulgala (90 km / 2.5 hrs)", desc: "Travel to Kitulgala, located amid lush rainforest. Experience thrilling white-water rafting on the Kelani River. Free activities include river tubing, exploring the rainforest trails, waterfall photography, and visiting local riverside villages. . End the day with sunset photography along the riverbank. - Overnight: Kitulgala " },
      { day: "Day 3", title: "Kitulgala → Knuckles Range (150 km / 4–4.5 hrs)", desc: "Drive to the Knuckles Mountain Range, enjoying breathtaking views of the mountains, rivers, and tea plantations. Set up for mountain camping, with free activities such as scenic viewpoint photography, short walks through local villages and paddy fields, and sunset views from mountain ridges. - Overnight: Knuckles Mountain Range (Camping)" },
      { day: "Day 4", title: "Knuckles Trekking", desc: "Spend the day trekking through the Knuckles region, encountering dense forests, waterfalls, and remote villages. Free activities include swimming in natural pools beneath waterfalls, canopy walks, birdwatching, and village cycling. Enjoy the sunset from a mountain viewpoint. - Spend the day trekking through the Knuckles region, encountering dense forests, waterfalls, and remote villages. Free activities include swimming in natural pools beneath waterfalls, canopy walks, birdwatching, and village cycling. Enjoy the sunset from a mountain viewpoint. - Overnight: Knuckles Mountain Range (Camping)" },
      { day: "Day 5", title: "Knuckles → Ella (160 km / 4–5 hrs)", desc: "Travel to Ella, passing scenic countryside, tea estates, and hillside villages. Free activities include stops at mini waterfalls, short village walks, and sunset photography from local viewpoints. Evening free to relax in Ella town. - Overnight: Ella" },
      { day: "Day 6", title: "Ella Sightseeing", desc: "Hike Ella Rock for panoramic views in the morning. Explore the Nine Arches Bridge and Ravana Falls, enjoying scenic hikes and photography opportunities. Free activities include walking through tea estates and paddy fields, visiting local markets, and strolling along village trails near Ravana Falls. - Overnight: Ella" },
      { day: "Day 7", title: "Ella → Yala (150 km / 4 hrs)", desc: "Travel to Yala, descending into the dry zone. In the afternoon, enjoy a jeep safari at Yala National Park, spotting leopards, elephants, deer, and exotic birds. Free activities include forest trails outside the park, photography of paddy fields and rivers, and sunset viewpoints." },
      { day: "Day 8", title: "Yala → Bentota (250 km / 5.5–6 hrs)", desc: "Drive to Bentota on the southwest coast. Relax at the beach and enjoy free activities such as coastal walks, exploration of fishing villages, coconut plantations, and sunset photography. In the evening, enjoy a farewell dinner celebrating your adventure across Sri Lanka." },
      { day: "Day 9", title: "Bentota → Negombo → Departure (95 km / 2.5 hrs + 35 km / 45 min)", desc: "Return to Negombo and transfer to Bandaranaike International Airport for departure. If time allows, enjoy a final stroll along Negombo Lagoon, or visit local shops and markets for souvenirs, capturing one last sunset over the Indian Ocean before leaving." }
    ]
  },
  "grand-classic": {
    title: "Ancient Wonders & Wellness",
    image: "/collections/ancient-wonders.webp",
    duration: "06 Nights | 07 Days",
    description: "From $697 per person (based on 12 pax). Rejuvenate with Ayurveda and explore UNESCO heritage sites.",
    highlights: [
      "Explore Ancient Anuradhapura, a UNESCO World Heritage site",
      "Visit Mihintale, the birthplace of Buddhism",
      "Climb the Sigiriya Rock Fortress and admire frescoes and gardens , and panoramic views",
      "Safari adventure at Minneriya National Park to spot elephants and wildlife",
      "Visit the Temple of the Sacred Tooth Relic in Kandy",
      "Free activities: village walks, paddy field trails, scenic viewpoints, and photography stops",
      "Farewell dinner on the last night to celebrate your journey"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo (35 km / 45 min from airport)", desc: "Arrive at Bandaranaike International Airport and transfer to your hotel. Relax after your journey and settle in. Check in to an Ayurveda hotel for wellness treatments such as massage, herbal therapies, or meditation. In the evening, enjoy a sunset walk along Negombo Beach or the lagoon for a peaceful start to your journey. - Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Anuradhapura (200 km / 4–4.5 hrs)", desc: "After breakfast, travel to Anuradhapura, one of Sri Lanka’s ancient capitals. Explore sacred stupas, monasteries, and historical ruins, including the Sri Maha Bodhi tree and Ruwanwelisaya. Take village walks or explore nearby paddy fields for free photography stops.-Overnight: Anuradhapura" },
      { day: "Day 3", title: "Anuradhapura → Mihintale → Sigiriya (90 km / 2–2.5 hrs)", desc: "Visit Mihintale, the birthplace of Buddhism in Sri Lanka. Climb the ancient stairways and explore the monastic ruins with stunning views of the surrounding countryside. Continue to Sigiriya and settle into your hotel. Optional evening walk around Sigiriya villages for sunset views.-Overnight: Sigiriya" },
      { day: "Day 4", title: "Sigiriya & Minneriya Safari(30 km round trip / 45 min) ", desc: "Climb the Sigiriya Rock Fortress in the morning, marveling at frescoes, Mirror Wall, Lion Terrace, and water gardens. In the afternoon, enjoy a jeep safari at Minneriya National Park to see wild elephants, deer, and birds. Optional free activities: photography at reservoirs, paddy fields, and sunset viewpoints.-Overnight: Sigiriya" },
      { day: "Day 5", title: "Sigiriya → Kandy  (90 km / 2.5 hrs)", desc: "Travel to Kandy, stopping at spice gardens or countryside viewpoints along the way. In Kandy, visit the Temple of the Sacred Tooth Relic. Explore Kandy Lake, take in panoramic city views from Bahirawakanda Buddha statue, and browse the Central Market for handicrafts, souvenirs, and spices. Evening free for short walks and photography around the city.-Overnight: Kandy" },
      { day: "Day 6", title: "Kandy → Negombo (110 km / 3 hrs)", desc: "After breakfast, return to Negombo, enjoying scenic countryside views and village stops along the way. In the evening, enjoy a farewell dinner at a local restaurant. After dinner, take a walk along the beach or Negombo Lagoon, capturing the last sunset. -Overnight: Negombo" },
      { day: "Day 7", title: "Departure (35 km / 45 min to airport)", desc: "After breakfast, check out and transfer to Bandaranaike International Airport. If time permits, enjoy a final walk along Negombo Lagoon or do some last-minute souvenir shopping, leaving with memories of Sri Lanka’s ancient wonders, wildlife, and scenic landscapes."}
    ]
  },
  "wellness-ayurvedic": {
    title: "Eco & Nature Trails",
    image: "/tours/econature.webp",
    duration: "07 Nights | 08 Days",
    description: "From $770 per person. Explore Sinharaja Rainforest, Udawalawe elephants, and Galle Fort.",
    highlights: [
      "Explore the UNESCO-listed Sinharaja Rainforest",
      "Guided morning nature walk with bird & butterfly spotting",
      "Elephant safari at Udawalawe National Park",
      "Wildlife safari at Yala National Park",
      "Discover the historic Galle Dutch Fort",
      "Free activities: village walks, waterfall viewpoints, lake sunsets, jungle trails & beach walks",
      "Relax by scenic lakes, rivers, and coastal viewpoints",
      "Farewell dinner on the last night in Negombo"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive at Bandaranaike International Airport and transfer to Negombo. Relax after your flight.Free activities: sunset beach walk, Negombo Lagoon view, village stroll, street photography.-Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Sinharaja (170 km | 4.5 hrs)", desc: "Travel inland to Sinharaja Rainforest. Evening free to enjoy jungle surroundings. Free activities: river bathing, bird spotting, forest-edge village walk.-Overnight: Sinharaja" },
      { day: "Day 3", title: "Sinharaja → Udawalawe  (130 km | 3.5 hrs)", desc: "Enjoy a guided morning nature walk inside the rainforest. Continue to Udawalawe. Free activities: lake photography, sunset views, village walk.-Overnight: Udawalawe" },
      { day: "Day 4", title: "Udawalawe Safari (Local travel)", desc: "Afternoon jeep safari in Udawalawe National Park, famous for wild elephants. Free activities: Udawalawe Reservoir walk, rural village stroll.n-Overnight: Udawalawe" },
      { day: "Day 5", title: "Udawalawe → Yala (80 km | 2 hrs)", desc: "Travel to Yala through dry zone landscapes. Evening jeep safari at Yala National Park to spot leopards and bears. Free activities: nature walk near hotel, bird photography. - Overnight: Yala" },
      { day: "Day 6", title: "Yala → Galle (190 km | 4.5 hrs)", desc: "Drive to the southern coast. Explore Galle Dutch Fort, colonial streets, and ramparts. Free activities: sunset walk on fort walls, beach photography,, café street stroll.-Overnight: Galle" },
      { day: "Day 7", title: "Galle → Negombo (165 km | 3.5 hrs)", desc: "Return along the coastal highway. Relax at the beach. Farewell Dinner in the evening. Free activities: beach walk, lagoon sunset. -Overnight: Negombo" },
      { day: "Day 8", title: "Departure (35 km | 45 min)", desc: "Transfer to the airport with unforgettable eco & wildlife memories." }
    ]
  },
  "gems-wellness": {
    title: "Gems, Nature & Ayurveda",
    image: "/tours/rathnapura.webp",
    duration: "05 Nights | 06 Days",
    description: "From $605 per person. Discover the City of Gems, lush rainforests, and holistic Ayurveda wellness.",
    highlights: [
      "Discover Ratnapura – Sri Lanka’s City of Gems",
      "Traditional gem mine & museum experience",
      "Visit the beautiful Bopath Ella Waterfall",
      "Sinharaja Rainforest trekking (UNESCO World Heritage Site)",
      "Elephant safari at Udawalawe National Park",
      "Relaxing Ayurvedic spa treatment in Colombo",
      "Free experiences: village walks, river bathing, jungle viewpoints & sunset photography",
      "•	Farewell dinner on the final night"

    ],
    itinerary: [
      { day: "Day 1", title: "Negombo → Ratnapura(170 km | 4.5 hrs)", desc: "Travel inland through coconut plantations, rubber estates, rivers, and tea-covered hills to Ratnapura, the world-famous City of Gems.Check in and relax in a peaceful nature setting.Free activities: evening village walk, riverbank stroll, sunset views. - Overnight: Ratnapura" },
      { day: "Day 2", title: "Ratnapura Gem Experience (Local travel)", desc: "Visit the Ratnapura Gem Museum and a traditional gem mine, learning how Sri Lanka’s precious stones are discovered.Later, enjoy a refreshing stop at Bopath Ella Waterfall, one of the island’s most scenic cascades.Free activities: local market walk, temple visit, river bathing. - Overnight: Ratnapura" },
      { day: "Day 3", title: "Ratnapura → Sinharaja (70 km | 2 hrs)", desc: "Travel to the Sinharaja Rainforest, a UNESCO biodiversity hotspot.Enjoy a guided rainforest trek through jungle trails, waterfalls, and bird habitats.Free activities: nature photography, forest-edge village walk, river stream bathing. - Overnight: Sinharaja" },
      { day: "Day 4", title: "Sinharaja → Udawalawe (130 km | 3.5 hrs)", desc: "Drive through rainforest foothills and rural villages to Udawalawe.In the afternoon, enjoy a jeep safari at Udawalawe National Park, famous for elephants, deer, crocodiles, and birds.Free activities: lake sunset walk, bird watching, village stroll. - Overnight: Udawalawe" },
      { day: "Day 5", title: "Udawalawe → Colombo (170 km | 4 hrs)", desc: "Travel to Colombo, Sri Lanka’s vibrant capital.In the evening, relax with a rejuvenating Ayurvedic spa & wellness treatment.Farewell Dinner in the evening.Free activities: Galle Face Green sunset walk, street food tasting, ocean promenade.-Overnight: Colombo" },
      { day: "Day 6", title: "Negombo Airport (35 km | 45 min)", desc: "Transfer to the airport for departure, carrying unforgettable memories of gems, rainforests, wildlife, and wellness." }
    ]
  },
  "cultural-express": {
    title: "Golden Triangle & Cultural Treasures",
    image: "/tours/golden.webp",
    duration: "05 Nights | 06 Days",
    description: "From $613 per person (based on 12 pax). The classic Sri Lankan loop featuring Sigiriya, Kandy, and Minneriya.",
    highlights: [
      "Visit the iconic Sigiriya Rock Fortress",
      "Experience the Minneriya National Park Safari",
      "Explore the Temple of the Tooth Relic in Kandy",
      "Walk through traditional villages and paddy fields",
      "Relax at Negombo Lagoon and watch a stunning sunset",
      "Discover free photo-worthy stops: Dutch Fort ruins, local spice gardens, and lake viewpoints",
      "Scenic drives through countryside, villages, and rural landscapes",
      "Farewell dinner on the last night"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo (35 km / 45 min from airport)", desc: "Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. After check-in, take time to relax. In the evening, enjoy a peaceful boat ride through Negombo Lagoon, exploring mangroves and traditional fishing villages, followed by a leisurely walk along Negombo Beach to admire the sunset. You can also visit the Negombo Fish Market, Dutch Fort ruins, and St. Mary’s Church for a glimpse of local life.- Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Sigiriya (150 km / 3.5 hrs)", desc: "After breakfast, depart for Sigiriya, traveling through scenic countryside. On arrival, visit the Sigiriya Rock Fortress, marveling at frescoes, the Mirror Wall, Lion Terrace, and landscaped gardens. In the afternoon, take a walk through nearby villages, reservoirs, and lakes, experiencing rural life and photography opportunities. In the evening, immerse yourself in local village culture. - Overnight: Sigiriya" },
      { day: "Day 3", title: "Minneriya Safari & Sigiriya Surroundings (30 km round trip / 45 min)", desc: "After breakfast, head to Minneriya National Park for a jeep safari to spot wild elephants, deer, and birds. Return to Sigiriya and spend the afternoon at leisure. Explore village trails, paddy fields, and reservoirs, or enjoy photography at sunset viewpoints -Overnight: Sigiriya" },
      { day: "Day 4", title: "Sigiriya → Kandy (90 km / 2.5 hrs)", desc: "Travel to Kandy, with optional stops at roadside spice gardens and countryside villages for photos and cultural experiences. In Kandy, visit the Temple of the Tooth Relic, walk around Kandy Lake, enjoy panoramic viewpoints, and explore the Central Market for spices and handicrafts. Evening includes an optional cultural dance performance. - Overnight: Kandy" },
      { day: "Day 5", title: "Kandy → Negombo (110 km / 3 hrs)", desc: "After breakfast, visit the Royal Botanical Gardens in Peradeniya to see orchids, tropical plants, and towering palms. On the drive back to Negombo, stop at scenic viewpoints and explore village roads and paddy fields. In the evening, enjoy a farewell dinner at a local restaurant, celebrating your journey through Sri Lanka. After dinner, take a beach walk or visit the Negombo Lagoon for a final scenic experience. - Overnight: Negombo" },
      { day: "Day 6", title: "Departure (35 km / 45 min to airport)", desc: "After breakfast, check out from your hotel and transfer to the airport. If time allows, take a last walk along Negombo Lagoon or do some final souvenir shopping, leaving with memories of Sri Lanka’s ancient heritage, wildlife, and picturesque landscapes." }
    ]
  },
  "romantic-gateway": {
    title: "Honeymoon in Paradise",
    image: "/tours/honeymoonn.webp",
    duration: "06 Nights | 07 Days",
    description: "From $630 per person. A dreamy getaway with romantic beaches, candlelight dinners, and scenic escapes.",
    highlights: [
      "Stay in a romantic beach villa with private time by the ocean",
      "Enjoy candlelight dinners and water sports in Bentota",
      "Explore historic Galle Fort and scenic coastal streets",
      "Embark on a romantic wildlife safari in Udawalawe National Park",
      "Discover tea plantations and scenic landscapes in Nuwara Eliya",
      "Enjoy a romantic boat ride at Gregory Lake",
      "Free activities: sunset walks, paddy field trails, village strolls, photography spots, and scenic viewpoints",
      "Farewell dinner on the last night"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo (35 km / 45 min from airport)", desc: "Arrive at Bandaranaike International Airport and transfer to a romantic beachside hotel. Relax and enjoy private time by the ocean. Free activities include a sunset walk along Negombo Beach, strolls along Negombo Lagoon, or exploring local streets and markets together.-Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Bentota (95 km / 2.5 hrs)", desc: "Travel along the scenic coastal route to Bentota. Spend the day enjoying water sports such as snorkeling, kayaking, or paddleboarding. In the evening, delight in a romantic candlelight dinner by the beach. Free activities include sunset walks along the shore, exploring local fishing villages, or photography of coastal scenery.-Overnight: Bentota" },
      { day: "Day 3", title: "Bentota → Galle (95 km / 2.5 hrs)", desc: "Travel to the historic city of Galle. Explore the UNESCO-listed Galle Fort, stroll along its charming streets, colonial architecture, and coastal ramparts. Free activities include exploring local cafes, boutique shops, and photo stops along the fort walls. Evening: enjoy a sunset walk along Galle Lighthouse and promenade. -Overnight: Galle" },
      { day: "Day 4", title: "Galle → Udawalawe (180 km / 4.5 hrs)", desc: "Drive inland to Udawalawe, passing paddy fields, rivers, and villages. Enjoy an exciting wildlife safari at Udawalawe National Park, spotting elephants, birds, and deer. Free activities: photography at scenic reservoirs, exploring village roads nearby, or sunset photography at park viewpoints.- Overnight: Udawalawe" },
      { day: "Day 5", title: "Udawalawe → Nuwara Eliya (180 km / 5 hrs)", desc: "Journey to Nuwara Eliya, entering Sri Lanka’s hill country. Explore scenic tea plantations, waterfalls, and misty valleys along the way. In the evening, enjoy a romantic boat ride at Gregory Lake, soaking in the serene surroundings. Free activities include strolling through tea estates, visiting paddy fields, or photography at scenic viewpoints. - Overnight: Nuwara Eliya" },
      { day: "Day 6", title: "Nuwara Eliya → Negombo (180 km / 4.5 hrs)", desc: "Return to Negombo along scenic countryside roads. Free activities include stopping at small villages, paddy fields, or viewpoints for photography. In the evening, enjoy a farewell dinner celebrating your honeymoon memories. Optional evening stroll along Negombo Beach or Lagoon. - Overnight: Negombo" },
      { day: "Day 7", title: "Departure (35 km / 45 min to airport)", desc: "After breakfast, check out and transfer to Bandaranaike International Airport. Optional final stroll along the beach or lagoon, leaving with unforgettable memories of your romantic Sri Lanka journey." }
    ]
  },
  "beach-splash": {
    title: "Luxury Sri Lanka Signature",
    image: "/tours/luxury-srilanka.jpg",
    duration: "09 Nights | 10 Days",
    description: "From $1,062 per person (based on 12 pax). The ultimate luxury experience with high-end resorts and private safaris.",
    highlights: [
      "Relax at luxurious beachfront resorts and hill country retreats",
      "Explore Sigiriya Rock Fortress and Temple of the Tooth",
      "Experience hill country tea plantations and Little Adam’s Peak",
      "Enjoy wildlife safaris at Udawalawe or Yala National Parks",
      "Discover UNESCO World Heritage sites and colonial architecture",
      "Free activities: lagoon walks, paddy field trails, village exploration, and scenic viewpoints",
      "Farewell dinner on the last night"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo (35 km / 45 min)", desc: "Arrive at Bandaranaike International Airport and transfer to your hotel. Relax after your flight, take a sunset walk along Negombo Beach, or stroll the lagoon and Dutch Fort ruins. - Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Sigiriya (150 km / 3.5 hrs)", desc: "Travel inland to Sigiriya. Visit the Sigiriya Rock Fortress and surrounding gardens, frescoes, and mirror wall. Explore nearby villages, reservoirs, and paddy fields for photography and short walks.- Overnight: Sigiriya" },
      { day: "Day 3", title: "Minneriya Safari & Village Exploration (30 km / 45 min round trip)", desc: "Enjoy a jeep safari at Minneriya National Park to see elephants, deer, and birds. Afternoon free to explore village trails, paddy fields, and natural reservoirs, or photograph sunset views over the countryside. - Overnight: Sigiriya" },
      { day: "Day 4", title: "Sigiriya → Kandy (90 km / 2.5 hrs)", desc: "Drive to Kandy, stopping at roadside spice gardens and countryside villages. Visit the Temple of the Tooth Relic, explore Kandy Lake and viewpoints, and browse the Central Market. Evening includes a cultural dance performance." },
      { day: "Day 5", title: "Kandy → Nuwara Eliya (80 km / 3 hrs)", desc: "Travel to Nuwara Eliya via tea plantations and misty hills. Visit a tea factory for a tasting session, stroll around Gregory Lake, and explore Victoria Park or nearby viewpoints. - Overnight: Nuwara Eliya" },
      { day: "Day 6", title: "Nuwara Eliya → Ella (Train Ride)", desc: "Board one of the world’s most scenic trains to Ella. Visit Nine Arches Bridge, hike Little Adam’s Peak, and enjoy photography at tea estates and waterfalls. Evening free to explore Ella town. - Overnight: Ella" },
      { day: "Day 7", title: "Ella → Udawalawe (90 km / 2.5 hrs)", desc: "Travel to Udawalawe, passing villages, rivers, and paddy fields. Enjoy a jeep safari at Udawalawe National Park to spot elephants, deer, and birds. Optional nature walks near the buffer zones for free exploration. - Overnight: Udawalawe" },
      { day: "Day 8", title: "Udawalawe → Bentota (200 km / 5 hrs)", desc: "Drive to Bentota on the coast. Enjoy beach relaxation or optional water sports. Take a coastal walk or explore local villages for free. Overnight: Bentota" },
      { day: "Day 9", title: "Bentota → Negombo (95 km / 2.5 hrs)", desc: "Return to Negombo. In the evening, enjoy a farewell dinner at a local restaurant, celebrating your luxurious journey through Sri Lanka. Optional beach or lagoon walks after dinner. - Overnight: Negombo" },
      { day: "Day 10", title: "Departure (35 km / 45 min) ", desc: "After breakfast, check out and transfer to the airport. Optional final stroll along Negombo Lagoon or last-minute shopping before departure." }
    ]
  },
  "adventure-tours": {
    title: "Tea Trails & Hill Country Escape",
    image: "/tours/teatrails.webp",
    duration: "06 Nights | 07 Days",
    description: "From $589 per person (based on 12 pax). A scenic journey through misty tea estates and waterfalls.",
    highlights: [
      "Explore the Negombo Fish Market and enjoy a sunset beach walk",
      "Experience Kandy city tour and Temple of the Tooth Relic",
      "Visit a tea factory in Nuwara Eliya and enjoy a Ceylon tea tasting",
      "Take one of the world’s most scenic train rides to Ella",
      "Visit the iconic Nine Arches Bridge and hike Little Adam’s Peak",
      "Enjoy a jeep safari at Udawalawe National Park",
      "Walk through villages, paddy fields, and scenic viewpoints along the route",
      "Farewell dinner on the last night"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo (35 km / 45 min from airport)", desc: "Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. After check-in, relax and refresh after your journey. In the evening, visit the Negombo Fish Market to witness the day’s catch and local life. Take a leisurely walk along Negombo Beach to admire the sunset over the Indian Ocean or explore Dutch Fort ruins and St. Mary’s Church nearby. For photography enthusiasts, the lagoon and beach provide scenic opportunities.- Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Kandy (110 km / 3 hrs)", desc: "After breakfast, depart for Kandy, traveling through picturesque countryside and rolling hills. On arrival, enjoy a city tour of Kandy, visiting local markets, viewpoints, and Kandy Lake. Explore the sacred Temple of the Tooth Relic, one of the most important Buddhist pilgrimage sites. Witness the evening pooja at the temple and take a stroll along hilltop viewpoints or local village roads nearby for free photo stops. - Overnight: Kandy" },
      { day: "Day 3", title: "Kandy → Nuwara Eliya (80 km / 3 hrs)", desc: "After breakfast, proceed to Nuwara Eliya, also known as “Little England,” passing lush tea plantations and misty hills. En route, stop at a tea factory to learn about Ceylon tea and enjoy a tasting session. Upon arrival, visit Gregory Lake and explore the town’s colonial charm. Take a walk in Victoria Park or enjoy scenic viewpoints over tea plantations for photography. -Overnight: Nuwara Eliya" },
      { day: "Day 4", title: "Nuwara Eliya → Ella (Train Ride)", desc: "After breakfast, transfer to the railway station for one of the world’s most scenic train journeys. Travel through rolling tea estates, waterfalls, valleys, and hill country villages to Ella. Upon arrival, visit the Nine Arches Bridge, a stunning architectural landmark, and enjoy a short hike to Little Adam’s Peak for panoramic views. Evening free to explore Ella town or relax at a café. - Overnight: Ella" },
      { day: "Day 5", title: "Ella → Udawalawe (90 km / 2.5 hrs)", desc: "After breakfast, depart Ella for Udawalawe, descending into the dry zone. Admire changing landscapes, rural villages, and rivers along the way. Upon arrival, embark on a thrilling jeep safari at Udawalawe National Park, famous for elephants, birds, and deer. In the evening, take a short village walk nearby or enjoy sunset photography over rural landscapes. - Overnight: Udawalawe" },
      { day: "Day 6", title: "Udawalawe → Negombo (180 km / 4.5 hrs)", desc: "After breakfast, begin your journey back to Negombo, passing countryside, plantations, and small towns. On arrival, check in to your hotel. In the evening, celebrate your journey with a farewell dinner at a local restaurant. After dinner, enjoy a beach walk or a scenic stroll along the Negombo Lagoon, capturing final sunset views.- Overnight: Negombo" },
      { day: "Day 7", title: "Departure (35 km / 45 min to airport)", desc: "After breakfast, check out from your hotel and transfer to Bandaranaike International Airport. If time allows, enjoy a final walk along Negombo Lagoon or do some last-minute souvenir shopping, leaving with memories of Sri Lanka’s tea trails, hill country scenery, wildlife, and cultural experiences." }
    ]
  },
  "classic-deluxe": {
    title: "Waves & Wildlife",
    image: "/tours/waves-and-wildlife.webp",
    duration: "07 Nights | 08 Days",
    description: "From $702 per person (based on 12 pax). The perfect mix of ocean waves, whales, and wild leopard safaris.",
    highlights: [
      "Relax and enjoy sunset by the Indian Ocean in Negombo",
      "Thrill in water sports at Bentota or take scenic beach walks",
      "Explore the UNESCO-listed Galle Fort and colonial streets",
      "Visit Coconut Hills and Parrot Rock in Mirissa",
      "Witness majestic whales in Mirissa (optional)",
      "Leisure and photography by Tissamaharama Lake and surrounding countryside",
      "Safari adventure at Yala National Park",
      "Walk through coastal villages, paddy fields, and scenic viewpoints",
      "Farewell dinner on the last night"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Negombo (35 km / 45 min from airport)", desc: "Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. Spend the evening relaxing on the beach and admire the sunset over the Indian Ocean. Optional strolls include Negombo Lagoon, Dutch Fort ruins, or visiting the local fish market. - Overnight: Negombo" },
      { day: "Day 2", title: "Negombo → Bentota (95 km / 2.5 hrs)", desc: "After breakfast, drive along the scenic coastal route to Bentota. Enjoy water sports like jet-skiing, banana boat rides, or snorkeling (optional). For free alternatives, take beach walks, explore palm-lined village roads, or relax by the ocean - Overnight: Bentota" },
      { day: "Day 3", title: "Bentota → Galle (80 km / 2 hrs)", desc: "Travel south to Galle. Explore the UNESCO-listed Galle Fort, wandering colonial streets, ramparts, and local markets. Free activities include walking along the ramparts, exploring hidden alleys, and taking photos of colonial architecture. - Overnight: Galle" },
      { day: "Day 4", title: "Galle → Mirissa (35 km / 1 hr)", desc: "Proceed to Mirissa, a serene beach town. Visit Coconut Hills and Parrot Rock, two scenic viewpoints offering panoramic views of the coastline and Indian Ocean—perfect for photography and a short walk. Spend the rest of the day relaxing on Mirissa Beach, exploring the fishing village, or enjoying a sunset along the coast. - Overnight: Mirissa" },
      { day: "Day 5", title: "Mirissa → Yala (150 km / 4 hrs)", desc: "Travel inland to Yala, passing paddy fields, small villages, and scenic countryside. In the afternoon, enjoy a jeep safari at Yala National Park, spotting leopards, elephants, deer, and exotic birds. Free activities include short nature walks near Yala buffer zones or photography stops along the way. - Overnight: Yala" },
      { day: "Day 6", title: "Yala → Tissamaharama (20 km / 30 min)", desc: "After breakfast, travel to Tissamaharama. Spend leisure time by Tissamaharama Lake, explore village roads and paddy fields, or enjoy sunset photography along the lake. - Overnight: Tissamaharama" },
      { day: "Day 7", title: "Tissamaharama → Negombo (240 km / 5–5.5 hrs)", desc: "Begin the journey back to Negombo through scenic countryside and villages. Upon arrival, check in to your hotel and enjoy a farewell dinner at a local restaurant. After dinner, take a beach walk or stroll along Negombo Lagoon, capturing the last sunset over the Indian Ocean. - Overnight: Negombo" },
      { day: "Day 8", title: "Departure - (35 km / 45 min to airport)", desc: "After breakfast, check out and transfer to Bandaranaike International Airport. If time allows, enjoy a final walk along Negombo Lagoon or do some last-minute souvenir shopping, leaving with unforgettable memories of Sri Lanka’s beaches, wildlife, and coastal charm." }
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
        <p className="mt-2 text-gray-400">The package "{slug}" does not exist.</p>
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
      <div className="container mx-auto px-6 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-24 md:pb-16">
        
        {/* Left: Highlights & Itinerary */}
        <div className="lg:col-span-2">
          
          {/* Description */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p className="text-lg font-medium text-blue-900">{tour.description}</p>
          </div>

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
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Book This Tour</h3>
            <p className="text-gray-500 text-sm mb-6">Customizable & Private</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 flex items-center gap-2"><Clock size={16}/> Duration</span> 
                <span className="font-bold text-slate-900">{tour.duration}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 flex items-center gap-2"><Car size={16}/> Transport</span> 
                <span className="font-bold text-slate-900">Private A/C</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 flex items-center gap-2"><User size={16}/> Guide</span> 
                <span className="font-bold text-slate-900">English/Tamil/Sinhala</span>
              </div>
            </div>

            {/* --- NEW: Included Features List --- */}
            <div className="mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h4 className="font-bold text-sm text-slate-800 mb-3 uppercase tracking-wide">Everything Included:</h4>
              
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Languages size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="font-medium">English / Tamil / Sinhala Guide & Driver</span>
              </div>
              
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Users size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Only 2 Staff Members (Driver & Guide)</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Car size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Private, Comfortable A/C Vehicle</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Plane size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Free Airport Pick-up & Drop</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Droplet size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Bottled Water During the Tour</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <ShieldCheck size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>No Hidden Charges</span>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transform active:scale-95"
            >
              Book Now <ArrowRight size={20} />
            </button>
            
            <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
              <CheckCircle size={12} className="text-green-500"/> Customizable Itinerary & 24/7 Support
            </p>
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