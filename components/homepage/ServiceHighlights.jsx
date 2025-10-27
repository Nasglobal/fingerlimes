"use client";
import { motion } from "framer-motion";
import { Boxes, Network, Brain, ArrowRight } from "lucide-react";
import Container from "../Container";

const services = [
  {
    id: 1,
    icon: Boxes,
    title: "Build a Product",
    desc: "From software engineering to dedicated teams, we help you scale with speed and precision.",
    link: "Let’s Build Together →",
    href: "/services",
  },
  {
    id: 2,
    icon: Network,
    title: "Telco VAS",
    desc: "Connect to millions across Africa through deep telco integrations — proven with MTN, Airtel, GLO, and 9Mobile.",
    link: "See Case Study →",
    href: "/services",
  },
  {
    id: 3,
    icon: Brain,
    title: "AI & Data",
    desc: "From predictive insights to generative AI, our data-driven approach powers smarter decisions.",
    link: "Explore AI Solutions →",
    href: "/services",
  },
];

export default function ServicesHighlights() {
  return (
    <Container>
    <section id="services" className="relative py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto md:px-6 ">
        {/* Header */}
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-20"
>
  {/* Fancy Label */}
  <p className="inline-block text-green-300 text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-1 rounded-full border border-green-400/40 bg-white/5 backdrop-blur-sm">
    Our Services
  </p>

  {/* Heading */}
  <h2 className="text-2xl md:text-4xl font-extrabold mb-4 relative inline-block">
    What We Build With You
    {/* Decorative underline */}
    <span className="absolute left-1/2 -bottom-2 w-24 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-x-1/2"></span>
  </h2>

  {/* Subtext with subtle border-top */}
  <p className="text-white/70 max-w-2xl text-sm md:text-lg mx-auto pt-4 border-t border-white/10">
    From product innovation to telco-scale integrations, our services
    power smarter, sustainable growth.
  </p>
</motion.div>

        {/* Vertical Rods - Stepwise */}
        <div className="flex flex-col md:flex-row md:gap-12 gap-6 justify-center">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: -150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: i * 0.4, ease: "easeOut" }}
                className={`md:relative bg-black/40 backdrop-blur-md 
                            border-2 border-green-400/70 shadow-2xl 
                            hover:scale-[1.02] transition-transform
                            rounded-xl p-6 md:-rotate-[2deg] 
                            md:w-[240px] md:h-[520px] h-[400px] flex flex-col justify-between
                            ${i === 1 ? "mt-16" : ""} ${i === 2 ? "md:mt-32 mt-16" : ""}`}
              >
                <div>
                  <Icon className="w-10 h-10 text-green-300 mb-6" />
                  <h3 className="text-xl font-semibold mt-2 mb-4">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <a
                  href={s.href}
                  className="inline-flex items-center text-sm rounded-lg border-[0.5px] border-white/40 p-2 gap-2 text-green-300 font-medium hover:underline mt-6"
                >
                  {s.link} 
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative glowing accents */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-700/10 rounded-full blur-3xl pointer-events-none" />
    </section>
    </Container>
  );
}
