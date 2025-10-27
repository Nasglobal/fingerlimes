"use client";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, BarChart3 } from "lucide-react";
import Container from "../Container";

const services = [
  {
    id: 1,
    title: "Build a Product",
    tagline: "From idea to launch, faster than ever.",
    blurb:
      "We bring together engineering talent, agile processes, and dedicated teams to turn your vision into scalable products — built with precision, speed, and sustainability.",
    icon: Cpu,
    cta: "Let’s Build Together →",
  },
  {
    id: 2,
    title: "Telco VAS",
    tagline: "Reach millions through seamless telco integrations.",
    blurb:
      "Our proven telco partnerships with MTN, Airtel, GLO, and 9Mobile help businesses expand reach, monetize services, and scale effortlessly across Africa’s diverse mobile markets.",
    icon: Network,
    cta: "See Case Study →",
  },
  {
    id: 3,
    title: "AI & Data",
    tagline: "Smarter decisions powered by data and AI.",
    blurb:
      "From predictive analytics to generative AI, we transform raw data into actionable insights, empowering businesses to innovate, automate, and make smarter decisions at every level.",
    icon: BarChart3,
    cta: "Explore AI Solutions →",
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ServicesHighlights() {
  return (
    <Container>
    <section className="relative py-32 bg-black text-white overflow-hidden">
    
      <div className="relative max-w-7xl mx-auto md:px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          What We <span className="text-green-400">Build</span> With You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-3xl mx-auto mb-16 text-lg"
        >
          From product innovation to telco-scale integrations, our services power smarter,
          sustainable growth.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariant}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 text-left 
                           hover:scale-[1.03] hover:border-green-500/40 transition-transform duration-500 shadow-lg"
              >
                <div className="absolute -top-6 left-6 w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center backdrop-blur-lg">
                  <Icon className="w-8 h-8 text-green-400" />
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-2">{service.title}</h3>
                <p className="text-green-300 font-medium mb-4 italic">
                  {service.tagline}
                </p>
                <p className="text-white/70 mb-6 leading-relaxed">{service.blurb}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-green-400 font-semibold hover:underline group"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
    </Container>
  );
}
