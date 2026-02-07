'use client'; 
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
// Kept Bus for the Van icon, Car for Car icon
import { Car, MapPin, User, Phone, Mail, ArrowRight, Bus } from 'lucide-react'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- DATA ---
const LOCATIONS = [
  "Katunayake International Airport",
  "Any location in Negombo",
  "Doorstep (within 10km inside Negombo)"
];

const VEHICLES = {
  Car: [
    { name: "Wagon R", image: "/vehicles/cars/wagon-r.webp" },
    { name: "Fit Shuttle", image: "/vehicles/cars/fit-shuttle.webp" },
    { name: "Prado", image: "/vehicles/cars/prado.webp" },
    { name: "Vitz", image: "/vehicles/cars/vitz.webp" },
    { name: "Vezel", image: "/vehicles/cars/vezel.webp" },
  ],
  Van: [
    { name: "KDH", image: "/vehicles/vans/kdh.webp" },
    { name: "Caravan", image: "/vehicles/vans/caravan.webp" },
    { name: "Super GL", image: "/vehicles/vans/super-gl.webp" },
    { name: "Spacia", image: "/vehicles/vans/spacia.webp" },
    { name: "Every Van", image: "/vehicles/vans/every-van.webp" },
  ],
  "Tuk Tuk": [
    // Ensure you have the main vehicle image here for Step 3
    { name: "TUk Tuk", image: "/vehicles/tuktuk/tuktuk.jpg" },
  ],
};

// --- ANIMATION VARIANTS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function RentPage() {
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState<"Car" | "Van" | "Tuk Tuk" | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: ""
  });

  const formRef = useRef<HTMLDivElement>(null);

  // Handle Vehicle Selection
  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    // Smooth scroll to form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle WhatsApp Submission
  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
Hello Bethel Ceylon Travels & Tours,

I would like to book a vehicle:
--------------------------------
Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
--------------------------------
Location: ${location}
Pickup: ${formData.pickupDate} at ${formData.pickupTime}
Return: ${formData.returnDate} at ${formData.returnTime}
--------------------------------
Vehicle: ${selectedVehicle} (${vehicleType})
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/94764136737?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="relative min-h-screen font-sans text-slate-900 bg-gray-50">
      <Header />
      
      {/* Background Image */}
      <div className="fixed inset-0 z-0 h-[60vh] bg-black">
         <img 
            src="/vehicles/vans/rent.webp"  
            alt="Car Rental" 
            className="w-full h-full object-cover opacity-60"
         />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 container mx-auto max-w-5xl">
        
        {/* Title */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Rent Your Journey</h1>
          <p className="text-gray-200 text-lg">Select your ideal vehicle and book instantly via WhatsApp.</p>
        </motion.div>

        {/* --- MAIN CARD --- */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-12">
          
          {/* STEP 01: LOCATION */}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">01</span>
              Select Pickup & Return Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className={`p-4 rounded-xl border-2 text-left transition-all flex items-start gap-3
                    ${location === loc 
                      ? "border-blue-600 bg-blue-50 text-blue-900" 
                      : "border-gray-200 hover:border-blue-300 text-gray-600"
                    }`}
                >
                  <MapPin size={20} className={`mt-1 flex-shrink-0 ${location === loc ? "text-blue-600" : "text-gray-400"}`} />
                  <span className="text-sm font-medium">{loc}</span>
                </button>
              ))}
            </div>
          </section>

          {/* STEP 02: VEHICLE TYPE */}
          <AnimatePresence>
            {location && (
              <motion.section 
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                className="mb-12"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">02</span>
                  Select Vehicle Type
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["Car", "Van", "Tuk Tuk"].map((type) => (
                    <button
                      key={type}
                      onClick={() => { setVehicleType(type as "Car" | "Van" | "Tuk Tuk"); setSelectedVehicle(null); }}
                      // Added 'group' class here for hover effects on the image
                      className={`flex-1 py-6 rounded-xl border-2 font-bold text-lg transition-all flex flex-col items-center gap-2 group
                        ${vehicleType === type 
                          ? "border-blue-600 bg-blue-600 text-white shadow-lg" 
                          : "border-gray-200 hover:bg-gray-50 text-gray-600"
                        }`}
                    >
                      {/* --- ICONS & CUSTOM IMAGE --- */}
                      {type === "Car" && <Car size={32} />}
                      {type === "Van" && <Bus size={32} />}
                      {type === "Tuk Tuk" && (
                        // CUSTOM TUK TUK ICON IMAGE
                        // Ensure /public/vehicles/tuktuk/icon.png exists
                        <img 
                          src="/vehicles/tuktuk/icon.png" 
                          alt="Tuk Tuk Icon" 
                          // CSS Filters to handle color changes:
                          // If selected: brightness-0 invert makes a black icon white.
                          // If not selected: grayscale opacity-50 makes it gray.
                          className={`w-8 h-8 object-contain transition-all ${
                            vehicleType === type 
                              ? "brightness-0 invert" 
                              : "grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0"
                          }`} 
                        />
                      )}
                      
                      {type}
                    </button>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* STEP 03: SELECT VEHICLE GRID */}
          <AnimatePresence>
            {vehicleType && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">03</span>
                  Select Your {vehicleType}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {VEHICLES[vehicleType].map((vehicle) => (
                    <div 
                      key={vehicle.name}
                      onClick={() => handleSelectVehicle(vehicle.name)}
                      className={`rounded-xl overflow-hidden border-2 cursor-pointer transition-all hover:shadow-xl group
                        ${selectedVehicle === vehicle.name ? "border-green-500 ring-2 ring-green-500 ring-offset-2" : "border-gray-100 hover:border-blue-300"}
                      `}
                    >
                      <div className="h-32 bg-gray-100 overflow-hidden">
                        {/* Main Vehicle Image (e.g., tuktuk.webp) */}
                        <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-gray-800 mb-3">{vehicle.name}</h3>
                        <button className={`w-full text-xs font-bold py-2 rounded-lg transition-colors
                          ${selectedVehicle === vehicle.name ? "bg-green-500 text-white" : "bg-gray-900 text-white group-hover:bg-blue-600"}
                        `}>
                          {selectedVehicle === vehicle.name ? "Selected" : "Check Booking"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* STEP 04: BOOKING FORM */}
          <AnimatePresence>
            {selectedVehicle && (
              <motion.section 
                ref={formRef}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
              >
                <h2 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">04</span>
                  Finalize Booking
                </h2>

                <form onSubmit={handleBookNow} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Details */}
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600 flex items-center gap-2"><User size={14}/> Your Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600 flex items-center gap-2"><Phone size={14}/> WhatsApp Number</label>
                      <input required type="tel" placeholder="+94 7X XXX XXXX" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600 flex items-center gap-2"><Mail size={14}/> Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>

                  <div className="h-px bg-gray-200 md:col-span-2 my-2"></div>

                  {/* Pickup Details */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-800">Pickup Details</h3>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</label>
                      <div className="p-3 bg-gray-200 rounded-lg text-gray-700 text-sm font-medium">{location}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Date</label>
                        <input required type="date" className="w-full p-3 rounded-lg border border-gray-300"
                          onChange={e => setFormData({...formData, pickupDate: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Time</label>
                        <input required type="time" className="w-full p-3 rounded-lg border border-gray-300"
                          onChange={e => setFormData({...formData, pickupTime: e.target.value})} />
                      </div>
                    </div>
                  </div>

                  {/* Return Details */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-800">Return Details</h3>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</label>
                      <div className="p-3 bg-gray-200 rounded-lg text-gray-700 text-sm font-medium">{location}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Date</label>
                        <input required type="date" className="w-full p-3 rounded-lg border border-gray-300"
                          onChange={e => setFormData({...formData, returnDate: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Time</label>
                        <input required type="time" className="w-full p-3 rounded-lg border border-gray-300"
                          onChange={e => setFormData({...formData, returnTime: e.target.value})} />
                      </div>
                    </div>
                  </div>

                  {/* STEP 05: SUBMIT */}
                  <div className="md:col-span-2 mt-8">
                    <button 
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3"
                    >
                      <span>📲 Book Now via WhatsApp</span>
                      <ArrowRight size={20} />
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      You will be redirected to WhatsApp to send your booking details to our agent (076 413 6737).
                    </p>
                  </div>

                </form>
              </motion.section>
            )}
          </AnimatePresence>

        </div>
      </div>
      
    </div>
  );
}