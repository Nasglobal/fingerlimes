"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "../Container";

export default function AboutPreview() {
  return (
    <div className="my-10">
    <div className="w-full flex justify-center text-sm pt-2  h-[40px] border-t border-b bg-black/4  backdrop-blur-md py-auto border-white/10 text-white/90 text-center">
         <p className=" relative inline-block">
          Lets bring your idea to reality...
          <span className="absolute left-1/2 bottom-[5px] w-24 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-x-1/2"></span>
         </p>  
    </div>
       <Container>
      <div className="mx-auto grid grid-cols-1 relative z-10 text-white md:grid-cols-2 gap-4 items-center">
        
        {/* LEFT: Phone image */}
      <motion.div
  initial={{ opacity: 0, x: -200, rotate: -8, scale: 0.9 }}
  whileInView={{
    opacity: 1,
    x: -40,
    rotate: -6,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  }}
  viewport={{ once: true, amount: 0.3 }}
  animate={{
    y: [0, -10, 0], // bob up & down
    rotate: [-6, -5, -6], // small tilt
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative w-full h-[700px] flex justify-start overflow-visible drop-shadow-2xl"
>
  <Image
    src="/assets/images/phone.png"
    alt="Phone illustration"
    fill
    className="object-contain rounded-bl-[20rem] md:ml-10 ml-16 md:mt-0  mt-[-60px]"
    priority
  />
</motion.div>


        {/* RIGHT: Text & CTA */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.4 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-left px-2 md:px-0 md:mt-0 mt-[-30px]"
        >
          <p className="text-green-300 uppercase tracking-wide text-sm font-semibold mb-3">
            About Us
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Not just coders. Not just consultants.
          </h2>
          <p className="text-white/70 md:text-lg text-sm mb-6 max-w-md">
           With offices in London and Lagos, Fingerlimes partners with forward-looking organizations to turn strategy into platforms that last. We combine business clarity with deep technical execution, helping clients unlock growth at scale.
          </p>

          <motion.a
            variants={{
              hidden: { opacity: 0, x: 60 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.8 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Meet Fingerlimes 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>

      </Container>
    </div>
  );
}
