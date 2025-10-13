"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, TrendingUp, ShieldCheck } from "lucide-react";
import Container from "../Container";

const values = [
  {
    id: "strategy",
    icon: Compass,
    title: "Strategy First",
    description: "We define the why before we build the how.",
  },
  {
    id: "scale",
    icon: TrendingUp,
    title: "Scale Sustainably",
    description: "Solutions designed to grow with your business.",
  },
  {
    id: "trusted",
    icon: ShieldCheck,
    title: "Trusted Delivery",
    description: "Precision, speed, and reliability proven across markets.",
  },
];

// Variants
const headerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } },
};

const cardVariant = (delay = 0) => ({
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export default function ValueSnapshot() {
  return (
    <section id="value-snapshot" className="md:py-20 py-10 z-10 md:mt-10 text-white">
        <Container>
      <div className="max-w-6xl mx-auto md:px-6 px-1">
        {/* Header */}
        <motion.div
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-green-300 flex justify-center text-sm uppercase tracking-wider font-semibold mb-4 px-3 py-1 w-fit mx-auto bg-white/4 backdrop-blur-sm border border-white/6 shadow-md rounded">
            Clarity. Scale. Precision.
          </p>
          <h2 className="text-2xl md:text-4xl font-bold md:font-extrabold">
            How we help businesses scale smarter
          </h2>
          <p className="mt-3 flex justify-self-center text-sm md:w-[50%] text-center text-white/70">
            We combine strategy and engineering to deliver platforms that scale — sustainably and with precision.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Illustration */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 md:order-1 flex items-center justify-center md:justify-start"
          >
            <div className="w-full ">
              <Image
                src="/assets/images/value-illustration.svg"
                alt="Value snapshot illustration"
                width={520}
                height={380}
                className="w-full "
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Cards */}
          <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.article
                  key={v.id}
                  variants={cardVariant(1 + i * 0.4)} // stagger: first at 1s, then 1.4s, 1.8s
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative md:p-6 p-2 rounded-2xl bg-white/4 backdrop-blur-sm border border-white/6 hover:scale-[1.02] transition-transform shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-300" />
                      </div>
                    </div>

                    <div>
                      <h3 className="md:text-lg text-sm font-semibold">{v.title}</h3>
                      <p className="text-white/70 mt-2 text-xs">{v.description}</p>
                    </div>
                  </div>

                  {/* subtle glow */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-lg bg-gradient-to-tr from-green-800/10 to-transparent blur-3xl pointer-events-none" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
