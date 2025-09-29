"use client"
import Shapes from "./Shapes";
import { motion } from "framer-motion";
import ScrollCue from "./ScrollCue";
import { ArrowRight,ArrowDown } from "lucide-react";
import Container from "../Container";
import { TypeAnimation } from "react-type-animation";


export default function HeroSection() {
  return (
    <section id="home" className=" min-h-screen  bg-black text-white overflow-visible">
         <Container>
       <div className="relative z-10 max-w-6xl mx-auto pt-20  px-6 grid md:grid-cols-2 items-center gap-6 w-full">
        <div className="text-left">
          <motion.h1
            className={` md:text-6xl text-4xl mt-10 font-bold italic text-center sm:text-left 
                text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-gray-300 to-white/80 
                `}
            style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                textShadow: `
                1px 1px 2px rgba(255,255,255,0.4),
                -1px -1px 2px rgba(0,0,0,0.2),
                0px 2px 5px rgba(0,0,0,0.5)
                `,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            We See <span className="text-[#0b7b27] mr-4">Business</span>Before Code
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg text-white/80 max-w-md mb-8 mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >

             {/* Typewriter Effect */}
      <TypeAnimation
        sequence={[
          500, // Wait 0.5s before starting
          "Technology is only powerful when it solves real business problems. At Fingerlimes, we bridge strategy and engineering to deliver platforms that scale— sustainably and with precision",
        ]}
        speed={50} // typing speed (ms per character)
        cursor={false} // hide blinking cursor
        className="text-white/70"
      />
            
          </motion.p>

         <motion.div
      className="flex gap-4 mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <button className="group px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
        Start a Conversation
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      <button className="group px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition flex items-center gap-2">
        Explore Services
        <ArrowDown className="w-4 h-4 text-white transition-transform group-hover:translate-y-1" />
      </button>
    </motion.div>

          <ScrollCue/>

        </div>
       <div className="">
          <Shapes/>

          {/* Foreground Lottie animation */}
     {/* <dotlottie-player
  src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
  background="transparent"
  speed="1"
  loop
  autoplay
  style={{ width: "320px", height: "320px" }}
/> */}
        </div>

      
      </div>
     
    </Container>
    </section>
  );
}
