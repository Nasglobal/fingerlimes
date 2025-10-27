"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "../Container";

export default function GlobalPresence() {
  return (
      
     <Container>
        <section className="rounded-2xl bg-black my-10 backdrop-blur-sm  border-white/6 text-black  md:p-10 border">
    

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto md:px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16"
        >
         
          <p className="text-sm md:text-xl text-green-500 font-semibold italic mb-5">
            Where We Operate...
          </p>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            With offices in <span className="text-green-300 font-semibold">London</span>  and <span className="text-green-300 font-semibold">Lagos</span>, we serve clients across continents — delivering solutions that adapt to local markets while leveraging global best practices.
          </p>
        </motion.div>

        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
        >
          {/* World Map Image */}
           
          <Image
            src="/assets/images/map-globe.png"
            alt="World map"
            fill
            className="object-contain opacity-60"
            priority
          />
         

          {/* London Pin */}
          <motion.div
            className="absolute left-[35%] top-[28%] flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative">
              <MapPin className="w-10 h-10 text-green-400 animate-pulse" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white">London</span>
            </div>
          </motion.div>

          {/* Lagos Pin */}
          <motion.div
            className="absolute left-[55%] top-[70%] flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="relative">
              <MapPin className="w-10 h-10 text-green-400 animate-pulse" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white">Lagos</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Optional office thumbnails */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-transform"
          >
            <Image
              src="/assets/images/london-office.PNG"
              alt="London Office"
              width={600}
              height={400}
              className="w-full h-85 object-cover opacity-90"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-green-300">London Office</h3>
              <p className="text-sm text-white/70">Our UK hub for product strategy and global operations.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-transform"
          >
            <Image
              src="/assets/images/lagos-office.PNG"
              alt="Lagos Office"
              width={600}
              height={400}
              className="w-full h-85 object-cover opacity-90"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-green-300">Lagos Office</h3>
              <p className="text-sm text-white/70">Our African base for engineering and market expansion.</p>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </Container>
    
  );
}
