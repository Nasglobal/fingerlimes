"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HangingMenu() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "/", href: "/", label: "Home" },
    { id: "about", href: "/about", label: "About" },
    { id: "services", href: "/services", label: "Services" },
    { id: "blog", href: "/blog", label: "Blog" },
    { id: "contact", href: "/contact", label: "Contact" },
  ];

  const handleNav = () => {
    // const el = document.getElementById(id);
    // if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive((prev) => !prev);
    setMobileOpen(false);
  };

  const handleNavMobile = (href) => {
    // const el = document.getElementById(id);
    // if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive((prev) => !prev);
    setMobileOpen(false);
    window.history.replaceState(null, '', href)
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
        className="hidden md:flex md:gap-10 gap-8 bg-black/20 backdrop-blur-md border border-white/10   rounded-full py-3  px-6">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return(
            <Link
              href={l.href}
              prefetch={false}
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="relative group text-sm text-white/60 font-medium  tracking-wide"
            >
              <span>{l.label}</span>
              {isActive && <span className={`absolute left-0 -bottom-1 h-[2px] w-full  bg-[#0b7b27]`} /> }
              <span className={`absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-[#0b7b27]`} />
            </Link>)
          })}
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
              {links.map((l, i) => {
                const isActive = pathname === l.href;
                return(
                <motion.button
                  key={l.id}
                  onClick={() => handleNavMobile()}
                  className={`${isActive ? "text-green-600":""} text-left text-sm font-semibold uppercase`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.05 },
                  }}
                >
                  <Link
                  href={l.href}
                  prefetch={false}
                  >
                  {l.label}
                  </Link>
                  
                </motion.button>)
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      </Container>
    </header>
  );
}
