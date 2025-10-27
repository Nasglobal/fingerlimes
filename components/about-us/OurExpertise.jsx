"use client";
import { motion } from "framer-motion";
import {
  Code,
  ShieldCheck,
  Smartphone,
  Layout,
  Brain,
  BarChart3,
  Cloud,
  ArrowRight,
  ListIcon
} from "lucide-react";
import Link from "next/link";
import Container from "../Container";

const expertise = [
  {
    icon: Code,
    title: "Custom Software Development",
    text: "Tailored solutions aligned with your business goals.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    text: "Reliable, scalable, and robust software delivery.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Seamless experiences for iOS and Android users.",
  },
  {
    icon: Layout,
    title: "UX/UI Design",
    text: "Engaging, intuitive interfaces that drive adoption.",
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    text: "Smarter automation and predictive insights.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    text: "Turning data into actionable foresight.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Engineering",
    text: "Secure, scalable foundations for growth.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurExpertise() {
  return (
  
       <Container>
      <div className="relative z-10 max-w-6xl py-20 mx-auto md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-green-300 uppercase tracking-widest text-xs font-semibold mb-3">
            Our Expertise
          </p>
          <div className="bg-black p-5 w-full rounded-sm border">
        
          <h2 className="text-xl md:text-5xl  text-white/80 font-extrabold italic mb-10 relative inline-block">
            Where Strategy Meets Capability
            <span className="absolute left-1/2 -bottom-4 w-64 h-[3px] bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-x-1/2"></span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            We combine business-first thinking with technical excellence across multiple
            disciplines, giving clients the confidence to scale, innovate, and compete.
          </p>
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white flex gap-2 underline items-center text-sm uppercase tracking-wider mb-8 font-semibold  text-center"
        >
         <ListIcon/> Expertise List 
        </motion.h3>

        {/* Vertical List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4 divide-y divide-white/10"
        >
          {expertise.map((itemData, i) => {
            const Icon = itemData.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="flex items-start gap-5 py-6 px-4 md:px-8 hover:bg-white/9  bg-white/10 rounded-2xl transition-colors duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-green-300 text-green-500 transition">
                    {itemData.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{itemData.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
   </Container>
  );
}
