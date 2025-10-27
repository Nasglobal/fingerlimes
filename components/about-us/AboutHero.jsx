"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Illustration from "./Illustration";
import { SpeechIcon } from "lucide-react";


const textAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ctaAnim = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.7 } },
};

export default function AboutHero() {
  return (
    
      <div className="relative z-10 max-w-6xl mx-auto  md:px-6 px-4 pt-30 md:pb-30 pb-10 grid md:grid-cols-2 gap-4 items-center">
        {/* Left: text */}
        <div className="md:text-left text-center w-full">
          <motion.p initial="hidden" animate="show" variants={textAnim} className="text-green-400 uppercase  tracking-wider  text-sm font-semibold mb-3">
            About Fingerlimes
          </motion.p>

          <motion.h1 variants={textAnim} initial="hidden" animate="show" className="text-3xl text-white/80 md:text-5xl  font-extrabold italic leading-tight mb-6">
            Bridging Strategy and Technology to Build Scalable Platforms
          </motion.h1>

          <motion.p variants={textAnim} initial="hidden" animate="show" className="text-white/70 max-w-xl mb-6">
            We help businesses turn vision into impact. By combining strategic insight with deep technical expertise,
            we create solutions that grow with you — sustainably and reliably.
          </motion.p>

          <motion.div variants={ctaAnim} initial="hidden" animate="show">
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-[1.03] transition-transform">
              Start a Conversation
              <SpeechIcon/>
            </Link>
          </motion.div>
        </div>

        {/* Right: Illustration */}
        <motion.div initial="hidden" animate="show" variants={textAnim} className="flex justify-center md:justify-end">
          <div className="w-full h-[420px]">
            <Illustration className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    
  );
}
