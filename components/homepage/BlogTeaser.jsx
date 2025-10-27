"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "../Container";





export default function BlogTeaser() {
  return (
    <section className="relative md:py-24 py-14 text-white overflow-hidden">
  <Container>
  <div className="relative z-10 max-w-7xl mx-auto  md:px-6 flex md:flex-row flex-col-reverse gap-12 items-center">
    {/* LEFT — Human Image */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-md overflow-hidden shadow-2xl mt-10 md:mt-[-70px]"
    >
      <Image
        src="/assets/images/human.jpg"
        alt="Person thinking about insights"
        height={200}
        width={200}
        className="w-full h-[600px] object-cover object-center"
      />
      {/* Soft overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </motion.div>

    {/* RIGHT — Blog cards + header */}
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-left"
      >
        <h2 className="text-xl md:text-left text-center md:text-2xl   font-extrabold mb-4">
          Ideas. <span className="text-green-400 mx-1">Insights. </span> Innovation.
        </h2>
        <p className="text-white/70 text-sm  max-w-md md:text-left text-center">
          Perspectives on scaling sustainably, transforming with technology,
          and staying ahead in a data-driven world.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6"
      >
        {[
          "Why Strategy Before Code Delivers Better Outcomes",
          "Scaling Across Africa: Lessons from Telco Integrations",
          "AI Beyond the Hype: Turning Data into Real Business Value",
        ].map((title, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-[1.02] transition-transform"
          >
            <h3 className="font-semibold mb-3">{title}</h3>
            <a
              href="/blog"
              className="inline-flex text-sm items-center gap-2 text-green-400 font-medium hover:underline group"
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10"
      >
        <a
          href="/blog"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform group"
        >
          Explore All Articles
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  </div>
  </Container>
</section>

  );
}
