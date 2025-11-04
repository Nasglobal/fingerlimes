"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "../Container";
import Image from "next/image";

export default function IntroSection() {
  return (
    
     <Container>
      <div className="relative py-20 max-w-4xl mx-auto text-center px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl text-white/80 font-extrabold mb-6"
        >
          From <span className="text-green-400">Vision</span> to Impact
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/70 text-sm md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          At Fingerlimes, every solution begins with understanding your business goals.
          Whether launching a new product, connecting millions across Africa, or harnessing
          AI-driven insights, we design, build, and scale technology that works for your strategy —
          not the other way around.
        </motion.p>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center"
        >
            <Image
            src="/assets/images/idea.png"
            alt="idea image"
            width={600}
            height={300}
            className="w-full md:h-[450px] h-[300px] mb-10"
        />
          <p className="md:text-sm text-[10px] uppercase tracking-wide text-green-300/90 my-3">
            Explore the ways we bring business and technology together.
          </p>
          <ChevronDown className="w-6 h-6 text-green-400 animate-bounce" />
        </motion.div>
      </div>
   </Container>
  );
}
