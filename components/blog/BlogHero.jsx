"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "../Container";

export default function BlogHero() {
  return (
    
    <section className="relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden">
     
      {/* Futuristic illustration */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/assets/images/insights.png"
          alt="Blog background illustration"
          fill
          priority
          className="object-cover mix-blend-overlay"
        />
      </motion.div>
       <Container >
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-extrabold italic mb-6"
        >
          Ideas. <span className="text-green-400">Insights.</span> Innovation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Stay ahead of the curve with our perspectives on technology, digital
          transformation, and scaling businesses sustainably.
        </motion.p>

        <motion.a
          href="#subscribe"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-green-400 hover:text-black transition"
        >
          Subscribe to Insights
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
      </Container>
    </section>
    
  );
}
