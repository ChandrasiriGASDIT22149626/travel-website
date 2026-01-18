'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "94764136737";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
*New Contact Inquiry*
--------------------------------
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}
--------------------------------
*Message:*
${formData.message}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900">
      <Header />

      {/* ================= HERO SECTION (Parallax) ================= */}
      <div className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')` 
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-4 text-white"
        >
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Ready to start your Sri Lankan adventure? We are here to help you plan the perfect trip.
          </p>
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 py-20 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* --- LEFT: INFO & MAP --- */}
          <div className="lg:w-5/12 bg-slate-900 text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-8">Contact Information</motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-400 mb-10 leading-relaxed">
                Fill up the form and our Team will get back to you within 24 hours.
              </motion.p>

              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-lg font-medium">+94 76 413 6737</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-lg font-medium">inquiries@bethelceylon.com</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-lg font-medium">Negombo, Western Province,<br/>Sri Lanka</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex gap-4 mt-12"
            >
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:scale-110 transition-all text-white">
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* --- RIGHT: FORM --- */}
          <div className="lg:w-7/12 p-10 md:p-12 bg-white">
            <motion.form 
              onSubmit={handleSendMessage} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} className="relative">
                  <input 
                    required type="text" placeholder=" " 
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 text-slate-900 outline-none focus:border-blue-600 transition-colors placeholder-transparent"
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <label className="absolute left-0 -top-3.5 text-sm text-blue-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">
                    Your Name
                  </label>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  <input 
                    required type="email" placeholder=" " 
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 text-slate-900 outline-none focus:border-blue-600 transition-colors placeholder-transparent"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <label className="absolute left-0 -top-3.5 text-sm text-blue-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">
                    Email Address
                  </label>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="relative">
                <input 
                  type="text" placeholder=" " 
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 text-slate-900 outline-none focus:border-blue-600 transition-colors placeholder-transparent"
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                />
                <label className="absolute left-0 -top-3.5 text-sm text-blue-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">
                  Subject
                </label>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <textarea 
                  required rows={4} placeholder=" " 
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 text-slate-900 outline-none focus:border-blue-600 transition-colors placeholder-transparent resize-none"
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
                <label className="absolute left-0 -top-3.5 text-sm text-blue-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">
                  Your Message
                </label>
              </motion.div>

              <motion.button 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-3"
              >
                Send Message <Send size={18} />
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* ================= MAP SECTION ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-xl h-[400px] bg-gray-200 relative group"
        >
          {/* Note: In production, replace this src with your specific Google Maps Embed API Key URL */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.41793579089!2d79.82118595000002!3d7.207802100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6bf2f749%3A0x73d321c17e066e44!2sNegombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* Map Overlay Text */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Our Base</p>
            <p className="text-slate-900 font-bold text-lg">Negombo, Sri Lanka</p>
          </div>
        </motion.div>

      </div>

     
    </div>
  );
}