"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";

export default function CaseStudySpotlight() {
  return (
        <section
      className="relative pb-24 pt-10 mt-5 text-white bg-black overflow-hidden"
      
    >
    <Container>
    <h2 className="text-xl md:text-2xl font-bold ml-10 mb-10 relative inline-block">
    Case Study Spotlight
    
    <span className="absolute left-1/2 -bottom-2 w-24 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-x-1/2"></span>
  </h2>
        
      <div className="max-w-6xl mx-auto mt-6 flex flex-col-reverse gap-12 items-center  md:px-6">
        {/* LEFT: Animated Globe */}
        <div className="relative mx-4 flex items-center justify-center h-[480px]">
          {/* Globe rings */}
          <div className="absolute md:w-80 md:h-80 w-60 h-60  rounded-full border border-white blur-[1px]" />
          <div className="absolute md:w-64 md:h-64 w-44 h-44 rounded-full border border-white blur-[1px]" />
          <div className="absolute md:w-96 md:h-96 w-80 h-80 rounded-full border border-white blur-[1px]" />

          {/* Center Node - Audiomack */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative z-10 h-40 w-40 rounded-full flex items-center justify-center bg-white/80"
          >
            <Image
              src="/assets/images/black-logo.png"
              alt="Fingerlimes logo"
              width={130}
              height={100}
              className="object-contain"
            />
          </motion.div>

          {/* === Telco Nodes on the Sphere === */}

          {/* MTN (Top-Right) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[380px] h-[380px] rounded-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-400 shadow-[0_0_25px_#FFD700]" />
              <span className="text-xs text-yellow-300 mt-2 font-semibold">
                MTN
              </span>
            </div>
          </motion.div>

          {/* Airtel (Bottom-Right) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[320px] h-[320px] rounded-full"
          >
            <div className="absolute md:bottom-0 bottom-1/2 right-0 translate-x-1/3 translate-y-1/3 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-500 shadow-[0_0_25px_#FF0000]" />
              <span className="text-xs text-red-400 mt-2 font-semibold">
                Airtel
              </span>
            </div>
          </motion.div>

          {/* GLO (Left) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[360px] h-[360px] rounded-full"
          >
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-400 shadow-[0_0_25px_#00FF00]" />
              <span className="text-xs text-green-400 mt-2 font-semibold">
                GLO
              </span>
            </div>
          </motion.div>

          {/* 9Mobile (Bottom-Left) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[300px] h-[300px] rounded-full"
          >
            <div className="absolute md:bottom-0 bottom-2/3 left-0 -translate-x-1/3 translate-y-1/3 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white shadow-[0_0_25px_#FFFFFF]" />
              <span className="text-xs text-white mt-2 font-semibold">
                9Mobile
              </span>
            </div>
          </motion.div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className=" z-10 rounded-2xl bg-white/16 backdrop-blur-sm border border-white/6 text-black flex flex-col w-full  p-5  md:p-10"
        >
         

        <h2 className="text-2xl text-white md:text-4xl mb-4 font-extrabold">
          Proof in Action
        
        </h2>

          <p className="text-white md:text-xl text-sm  mb-8  leading-relaxed">
            <strong className="text-gray-300">Fingerlimes</strong> expanded music streaming across Africa by
            leveraging telco billing and VAS integrations with{" "}
            <span className="text-yellow-600 font-semibold">M<span className="text-blue-600">T</span>N</span>,{" "}
            <span className="text-red-600 font-semibold">Airtel</span>,{" "}
            <span className="text-green-500 font-semibold">GLO</span>, and{" "}
            <span className=" font-semibold">9Mobile</span>.
          </p>

          <Link
          href="/blog"
           className="flex md:w-[22%] text-center items-center justify-items-center gap-2 px-14 md:px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Read Case Study 
            <ArrowRight className="w-5 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

           
        </motion.div>
      </div>

     </Container>
    </section>
  );
}
