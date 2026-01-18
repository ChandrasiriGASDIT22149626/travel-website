'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- FIXED ANIMATIONS ---
// The 'as const' is CRITICAL here. It fixes the build error.
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423736569-8d76e339b8c0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-4 text-white"
        >
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto">
            Ready to plan your dream vacation? Our team is here to help you craft the perfect Sri Lankan adventure.
          </p>
        </motion.div>
      </div>

      {/* --- CONTACT CONTENT --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Let's start a conversation</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Whether you have a question about our tours, pricing, or want a custom itinerary, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-slate-600">No 117, Sir Chittampalam A Gardiner Mawatha,<br/> Colombo 02, Sri Lanka.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="bg-green-100 p-3 rounded-full text-green-600"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-600">info@bethelceylontours.com</p>
                  <p className="text-slate-500 text-sm mt-1">We reply within 24 hours</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Anytime</h4>
                  <p className="text-slate-600 text-xl font-bold">+94 77 726 5746</p>
                  <p className="text-slate-500 text-sm mt-1">Available 24/7 for international inquiries</p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                  <input required type="text" placeholder="John" className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all border border-transparent focus:border-blue-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                  <input required type="text" placeholder="Doe" className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all border border-transparent focus:border-blue-200" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all border border-transparent focus:border-blue-200" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea required rows={5} placeholder="Tell us about your travel plans..." className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all border border-transparent focus:border-blue-200"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  formStatus === 'success' ? 'bg-green-500 text-white' : 'bg-slate-900 text-white hover:bg-blue-600'
                }`}
              >
                {formStatus === 'idle' && <>Send Message <Send size={20} /></>}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="h-[400px] w-full bg-slate-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2260776272534!2d79.8474123!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592182c3c99d%3A0xe5495e8f5b99e71b!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1705600000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      
    </div>
  );
}