"use client";
import { motion } from "framer-motion";
import { Brain, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "../Container";

export default function Spotlights() {
  return (
       <Container>
      <div className="relative max-w-7xl mx-auto md:px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 uppercase tracking-widest text-xs font-semibold mb-10">
            AI & Data Spotlight
          </p>

          <h2 className="text-2xl text-white/80 md:text-4xl md:text-left text-center font-extrabold mb-6 leading-tight">
            From <span className="text-green-400">Insights</span> to Action
          </h2>

          <p className="text-white/70 mb-8 leading-relaxed text-sm md:text-lg">
            Our AI and data solutions empower businesses to unlock value from complex
            datasets. We create predictive models, intelligent automation, and actionable
            dashboards — enabling faster, smarter decisions across operations, products,
            and markets.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-green-400 hover:text-black transition"
          >
            Talk to Our Data Experts
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* RIGHT: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Background halo */}
          <div className="absolute w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />

          {/* Core illustration image */}
          <div className="relative w-[420px] h-[320px]">
            <Image
              src="/assets/images/illustration-ai.png"
              alt="AI data visualization"
              fill
              className="object-contain opacity-90"
              priority
            />
          </div>

          {/* Floating icons */}
          <motion.div
            className="absolute top-10 left-10 w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center backdrop-blur-md border border-green-400/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Brain className="w-6 h-6 text-green-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center backdrop-blur-md border border-green-400/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BarChart3 className="w-6 h-6 text-green-400" />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
