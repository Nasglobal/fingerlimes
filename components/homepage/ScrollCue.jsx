"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function ScrollCue() {
  const handleScroll = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex items-center gap-3 z-10 mt-10 text-white/70 text-sm tracking-wide cursor-pointer"
      onClick={handleScroll}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Bouncing Arrow */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-4 h-4 text-green-800" />
      </motion.div>
      <p className=" italic text-xs text-white/80">See how we help businesses scale smarter</p>

      {/* Typewriter Effect */}
      {/* <TypeAnimation
        sequence={[
          500, // Wait 0.5s before starting
          "See how we help businesses scale smarter.",
        ]}
        speed={50} // typing speed (ms per character)
        cursor={false} // hide blinking cursor
        className="text-white/70"
      /> */}
    </motion.div>
  );
}
