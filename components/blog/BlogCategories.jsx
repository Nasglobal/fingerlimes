"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Digital Transformation",
  "AI & Data",
  "Product Development",
  "Telco Integrations",
  "Case Studies",
];

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("Digital Transformation");

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-[#08140d] to-black text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,100,0.05),_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-6"
        >
          Find Insights That Matter to You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-2xl text-sm mx-auto mb-14"
        >
          Filter by topic to discover insights relevant to your business.
        </motion.p>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-md shadow-md ${
                activeCategory === category
                  ? "bg-green-400 text-black border-green-500"
                  : "bg-white/5 text-white/80 border-white/10 hover:border-green-400/40"
              }`}
            >
               {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeCategory}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-green-400 font-semibold uppercase tracking-wide mb-2 text-sm">
            Currently Viewing:
          </p>
          <h3 className="text-xl md:text-2xl font-bold italic">Post for {activeCategory}</h3>
        </motion.div>
      </div>
    </section>
  );
}
