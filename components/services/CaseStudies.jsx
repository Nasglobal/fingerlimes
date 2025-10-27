"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "../Container";

const caseStudies = [

    {
    id: 1,
    title: "FingerLimes",
    description:
      "Expanded music streaming across Africa using telco billing and VAS integrations. Partnered with MTN, Airtel, GLO, and 9Mobile to reach millions.",
    cta: "Read Case Study",
    image: "/assets/images/black-logo.png",
  },
 
  {
    id: 2,
    title: "AI Analytics Platform",
    description:
      "Implemented predictive analytics for smarter operational decisions. Reduced costs and improved customer engagement through data-driven insights.",
    cta: "Discover How",
    image: "/assets/images/ai-image2.png",
  },
   
];

export default function CaseStudies() {
  return (
       <Container>
      <div className="relative text-white/80 max-w-7xl mx-auto py-20 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Solutions That Deliver Results
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Real-world proof points showing how Fingerlimes bridges innovation and execution.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="space-y-20">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className={`relative w-full h-[340px] bg-white/90  md:rounded-2xl overflow-hidden`}>
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="w-[250px] h-[200px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 border border-white/10 backdrop-blur-md md:rounded-2xl p-8 hover:border-green-400/30 hover:scale-[1.02] transition-transform duration-500 ${
                  i % 2 === 0 ? "md:ml-[-60px]" : "md:ml-[-60px]"
                }`}
              >
                <h3 className="text-2xl text-green-500 font-bold mb-3">{cs.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{cs.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-green-400 font-semibold hover:underline group"
                >
                  {cs.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
   </Container>
  );
}
