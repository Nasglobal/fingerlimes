"use client";
import Shapes from "./Shapes";
import { motion } from "framer-motion";
import ScrollCue from "./ScrollCue";
import { ArrowRight, ArrowDown } from "lucide-react";
import Container from "../Container";
import { TypeAnimation } from "react-type-animation";

// Variants
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scrollCueVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } },
};

const buttonVariant = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { delay: 1.6, duration: 0.7, ease: "easeOut" } },
};

const shapesVariant = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { delay: 2.0, duration: 0.8, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen text-white overflow-visible">
      <Container>
        <div className="relative z-10 max-w-6xl mx-auto pt-20 px-2 grid md:grid-cols-2  items-center gap-6 w-full">
          {/* LEFT: Text */}
          <div className="text-left">
            {/* Title */}
            <motion.h1
              variants={textVariant}
              initial="hidden"
              animate="show"
              className="md:text-6xl text-4xl md:mt-20 mt-10 font-extrabold italic text-center sm:text-left 
                text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-gray-300 to-white/80"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                textShadow: `
                  1px 1px 2px rgba(255,255,255,0.4),
                  -1px -1px 2px rgba(0,0,0,0.2),
                  0px 2px 5px rgba(0,0,0,0.5)
                `,
              }}
            >
              We See <span className="text-[#0b7b27] md:mr-4 mr-2">Business</span>Before Code
            </motion.h1>

            {/* Subtext with Typewriter */}

            <motion.p
              variants={textVariant}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.6 }}
              className="text-sm text-center md:text-left md:text-lg text-white/80 max-w-md mb-8 mt-3"
            >
              <TypeAnimation
                sequence={[
                  500,
                  "Technology is only powerful when it solves real business problems. At Fingerlimes, we bridge strategy and engineering to deliver platforms that scale— sustainably and with precision",
                ]}
                speed={50}
                cursor={false}
                className="text-white/70 text-sm"
              />
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              className="flex flex-col md:flex-row gap-4 mt-6"
            >
              <button className="group md:px-4 text-sm px-12 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform flex justify-items-center items-center gap-2">
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group md:px-6 px-12 py-3 text-sm border border-white md:border-white/20 rounded-full hover:bg-white/10  transition flex items-center gap-2">
                Explore Services
                <ArrowDown className="w-4 h-4 text-white transition-transform group-hover:translate-y-1" />
              </button>
            </motion.div>

            {/* Scroll Cue */}
            <motion.div variants={scrollCueVariant} initial="hidden" animate="show">
              <ScrollCue />
            </motion.div>
          </div>

          {/* RIGHT: Shapes */}
         
            <Shapes variants={shapesVariant} />
          
        </div>
      </Container>
    </section>
  );
}
