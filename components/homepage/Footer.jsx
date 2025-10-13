"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="relative text-white pt-10 pb-5 overflow-hidden">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-t border-white/10" />
       <Container>
      <div className="relative z-10  mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Logo + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-3"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/white-logo.png"
              alt="Fingerlimes Logo"
              width={120}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Tagline */}
          <p className="text-sm text-white/70 ">
            Fingerlimes Limited — <br className="md:hidden" /> Where Business Meets Technology.
          </p>
        </motion.div>

        {/* Center: Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium"
        >
          {["About", "Services", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="group relative text-white/80 hover:text-green-400 transition-colors"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-10 max-w-6xl mx-auto px-6 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-3">
        <p>© {new Date().getFullYear()} Fingerlimes Limited. All rights reserved.</p>
        <p className="text-white/40">
          Designed with <span className="text-green-400">precision</span> and{" "}
          <span className="text-green-400">clarity</span>.
        </p>
      </div>
     </Container>
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
    </footer>
  );
}
