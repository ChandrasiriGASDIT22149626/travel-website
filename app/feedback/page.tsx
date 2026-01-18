'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, ArrowLeft, MessageCircleHeart } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "94764136737";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -2 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const emojiVariants = {
  initial: { scale: 0.5, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  exit: { scale: 0.5, opacity: 0, y: -20, transition: { duration: 0.2 } }
};

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");

  // Emoji logic based on rating
  const getEmoji = (r: number) => {
    switch (r) {
      case 1: return "😢";
      case 2: return "😕";
      case 3: return "😐";
      case 4: return "😊";
      case 5: return "🤩";
      default: return "👋";
    }
  };

  const getLabel = (r: number) => {
    switch (r) {
      case 1: return "Oh no! What went wrong?";
      case 2: return "We can do better.";
      case 3: return "It was okay.";
      case 4: return "Good experience!";
      case 5: return "Absolutely loved it!";
      default: return "How was your trip?";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating to continue! ✨");
      return;
    }

    const stars = "⭐".repeat(rating);
    const message = `
🌈 *New Feedback!* 🌈
-----------------------
👤 *Name:* ${name || "Anonymous"}
${getEmoji(rating)} *Rating:* ${rating}/5 ${stars}
💬 *Feedback:* ${feedback || "No comments."}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen font-sans flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow flex items-center justify-center p-4 pt-32 pb-20">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 relative overflow-hidden text-center"
        >
          {/* Decorative Blob */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* Back Link */}
          <Link href="/" className="absolute top-8 left-8 text-gray-400 hover:text-gray-800 transition-colors">
            <ArrowLeft size={24} />
          </Link>

          {/* Header Icon */}
          <div className="bg-gradient-to-tr from-violet-600 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-200">
            <MessageCircleHeart className="text-white w-10 h-10" />
          </div>

          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Feedback Time!</h2>
          <p className="text-gray-500 mb-8">Help us sprinkle some magic on our tours.</p>

          {/* --- STAR RATING --- */}
          <div className="mb-2 h-16 flex items-center justify-center">
             <AnimatePresence mode='wait'>
                <motion.div 
                  key={hoveredStar || rating || "default"}
                  variants={emojiVariants}
                  initial="initial" animate="animate" exit="exit"
                  className="text-6xl"
                >
                  {getEmoji(hoveredStar || rating)}
                </motion.div>
             </AnimatePresence>
          </div>

          <p className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-4 h-6">
            {getLabel(hoveredStar || rating)}
          </p>

          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="focus:outline-none transition-all"
              >
                <Star 
                  size={45} 
                  className={`transition-all duration-300 drop-shadow-sm ${
                    star <= (hoveredStar || rating) 
                      ? "fill-yellow-400 text-yellow-400 scale-110" 
                      : "fill-gray-100 text-gray-300"
                  }`} 
                />
              </motion.button>
            ))}
          </div>

          {/* --- FORM --- */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Your Thoughts</label>
              <textarea 
                rows={3}
                placeholder="Tell us what you liked..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all resize-none"
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-lg py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              Send Feedback <Send size={20} />
            </motion.button>
          </form>

        </motion.div>
      </main>

      
    </div>
  );
}