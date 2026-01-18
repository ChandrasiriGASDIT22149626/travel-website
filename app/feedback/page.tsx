'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Star, Send, ArrowLeft, MessageCircleHeart } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- FIXED VARIANTS (Added 'as const' to fix build error) ---
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      type: "spring" as const, 
      stiffness: 100, 
      damping: 15 
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { duration: 0.2 } 
  }
};

const starVariants = {
  hover: { scale: 1.2, rotate: 10 },
  tap: { scale: 0.8, rotate: -10 }
};

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-4 relative pt-24 pb-12">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 rounded-b-[3rem]"></div>
        </div>

        <AnimatePresence mode='wait'>
          {!submitted ? (
            <motion.div 
              key="form"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 w-full max-w-lg bg-white rounded-[2rem] shadow-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircleHeart size={32} />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">We value your opinion</h1>
                <p className="text-slate-500">How was your experience with our travel services?</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Star Rating */}
                <div className="flex justify-center gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      variants={starVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none"
                    >
                      <Star 
                        size={36} 
                        className={`transition-colors duration-200 ${
                          star <= (hoveredRating || rating) 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-slate-300"
                        }`} 
                      />
                    </motion.button>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Feedback</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Tell us what you liked or how we can improve..." 
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all border border-transparent focus:border-blue-200"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all border border-transparent focus:border-blue-200"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Submit Review <Send size={20} />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 w-full max-w-lg bg-white rounded-[2rem] shadow-2xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
              <p className="text-slate-500 text-lg mb-8">
                Your feedback helps us create better experiences for travelers like you.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={20} /> Back to Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      
    </div>
  );
}