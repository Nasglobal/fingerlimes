"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight,SpeechIcon } from "lucide-react";
import Container from "../Container";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center">
        
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#06130b] to-black z-0" />

      {/* Floating mesh background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/assets/images/services-mesh.png"
          alt="Futuristic mesh background"
          fill
          priority
          className="object-cover mix-blend-overlay"
        />
      </motion.div>

      {/* Diagonal overlay shape */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-green-900/20 via-transparent to-transparent skew-y-6 transform origin-bottom-left" />

      {/* Hero Content */}
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-30 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
         
        >
          We Build 
          <span className="text-green-400 ml-3">Digital Solutions</span><br />
          That Scale With Your <br/> Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/90 max-w-2xl mb-8 text-sm md:text-lg"
        >
          From product innovation to telco integrations and AI-driven insights, we create platforms that deliver measurable growth and lasting impact
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-green-400 hover:text-black transition"
        >
          Start a Conversation 
          <SpeechIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>

      {/* Decorative circles / glowing nodes */}
      <motion.div
        className="absolute bottom-10 right-16 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
    </section>
  );
}
