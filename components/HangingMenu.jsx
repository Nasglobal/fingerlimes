"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { X } from "lucide-react";

export default function HangingMenu() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header
     className={`fixed w-full z-40 transition-all duration-300 ${
                    scrolled
                    ? "backdrop-blur-xs   py-2"
                    : "backdrop-blur-xs  py-4"
                }`}
    >
    <Container>
      <div className="max-w-6xl mx-auto px-3 flex items-center justify-between">
        <Link href={"/"}>
         <Image
                src={`/assets/images/white-logo.png`}
                alt="store logo"
                width={200}
                height={100}
                className="w-[150px] h-[50px]"
         />
        </Link>
        
        <nav
        className="hidden md:flex md:gap-10 gap-8 bg-black/20 backdrop-blur-md border border-white/10   rounded-full py-3  px-5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="relative group text-sm text-white/60 font-medium  tracking-wide"
            >
              <span>{l.label}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-[#0b7b27]" />
            </button>
          ))}
        </nav>

        {/* mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="p-2 focus:outline-none"
          >
            {
              mobileOpen ? <X color="white"/> :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#FFF"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            } 
            
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-black/95 text-white/70 w-full backdrop-blur-sm"
          >
            <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => handleNav(l.id)}
                  className="text-left text-sm font-semibold uppercase"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.05 },
                  }}
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      </Container>
    </header>
  );
}
