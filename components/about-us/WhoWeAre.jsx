"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function WhoWeAre() {
  return (

    <Container>
         <h3 className="text-sm text-white md:text-lg text-center   relative ">
    We deliver satisfaction...
    
    <span className="absolute left-1/2 -bottom-2 w-24 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-x-1/2"></span>
  </h3>

  <div className="relative z-10 max-w-6xl mx-auto md:px-6  py-20 grid md:grid-cols-2 gap-10 items-center">
       
        
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-full h-[380px] md:w-[480px] md:h-[480px]">
            <Image
              src="/assets/images/collabo-image.PNG"
              alt="Team collaboration illustration"
              fill
              className="object-cover rounded-lg border border-white/10 shadow-2xl"
              priority
            />
            {/* Soft gradient overlay for glass look */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-green-800/10 rounded-[2rem]" />
          </div>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="md:text-left text-center"
        >
          <p className="text-green-400 uppercase  text-sm font-semibold tracking-wider mb-4">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl text-white/80  font-extrabold  leading-snug mb-6">
            Not Just Coders. <br /> Not Just Consultants.
          </h2>

          <p className=" bg-white/2 backdrop-blur-sm border border-white/50 rounded-lg  p-4 leading-relaxed mb-8 text-green-400 max-w-lg">
            We are a team of strategists, designers, and engineers united by one belief —
            that technology should serve business, not the other way around. At Fingerlimes, we
            combine clarity of vision with precision in execution to create products that solve
            real challenges, not just technical ones.
          </p>

          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Meet Our Team →
          </Link>
        </motion.div>
      </div>

    </Container>
      
  
  );
}
