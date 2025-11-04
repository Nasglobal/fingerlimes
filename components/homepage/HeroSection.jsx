"use client";
import { useState, useEffect } from "react";
import Shapes from "./Shapes";
import { motion, AnimatePresence } from "framer-motion";
import ScrollCue from "./ScrollCue";
import { ArrowRight, ArrowDown } from "lucide-react";
import Container from "../Container";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

// List of hero slides (title + subtitle)
const slides = [
  {
    title: (
      <>
        We See <span className="text-[#028423] md:text-8xl">Business</span> Before Code
      </>
    ),
    subtitle:
      "Solving business problems with technology.",
  },
  {
    title: (
      <>
        Bridging <span className="text-[#d80404]">Strategy</span>  and  <span className="text-[#d80404]">Engineering</span>
      </>
    ),
    subtitle:
      "From startups to telco-grade platforms, our solutions scales and grow with you.",
  },
  {
    title: (
      <>
        Balanced <br/> 
        <span className="text-yellow-700">Software</span><br/> Engineering
      </>
    ),
    subtitle:
      "Cost, Speed, and Quality in Harmony",
  },
];

// Variants for the fade slider
const fadeVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.8 } },
};


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

  const [index, setIndex] = useState(0);

  // Auto-rotate slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen text-white overflow-visible">
      <Container>
        <div className="relative z-10 max-w-6xl mx-auto pt-20 px-2 grid md:grid-cols-2  items-center gap-6 w-full">
          {/* LEFT: Text */}
          <div className="text-left md:pl-10">
            {/* Title */}
           <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="md:text-7xl text-5xl  md:mt-15 mt-10 font-extrabold text-center sm:text-left 
                  text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-gray-300 to-white/80"
                style={{
                  fontFamily: "sans-serif", // 👈 custom font only for hero
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  textShadow: `
                    1px 1px 2px rgba(255,255,255,0.4),
                    -1px -1px 2px rgba(0,0,0,0.2),
                    0px 2px 5px rgba(0,0,0,0.5)
                  `,
                }}
              >
                {slides[index].title}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle Slider */}
            <AnimatePresence mode="wait">
              <motion.p
                key={index + "-subtitle"}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-sm text-center md:text-left md:text-lg text-white/80 max-w-md mb-8 mt-6"
              >
                {slides[index].subtitle}
              </motion.p>
            </AnimatePresence>


            {/* Buttons */}
            <motion.div
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              className="flex flex-col md:flex-row md:gap-4 gap-6 mt-6"
            >
              <Link
              href="/contact"
               className="group  text-sm px-14 md:px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform flex justify-items-center items-center gap-2">
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

               <Link
              href="/services" className="group  px-14 md:px-6 py-3 text-sm border border-white md:border-white/20 rounded-full hover:bg-white/10  transition flex items-center gap-2">
                Explore Services
                <ArrowDown className="w-4 h-4 text-white transition-transform group-hover:translate-y-1" />
              </Link>
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

