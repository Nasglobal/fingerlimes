"use client";
import { motion } from "framer-motion";
import { Compass, TrendingUp, Users, CheckCircle } from "lucide-react";
import Container from "../Container";



const values = [
  {
    id: "clarity",
    accent: "from-green-600 to-green-400",
    icon: Compass,
    title: "Clarity Before Code",
    subtitle: "Define the “why” before building the “how.”",
    text:
      "We start with strategy, ensuring every solution is rooted in real business outcomes before a single line of code is written.",
  },
  {
    id: "scale",
    accent: "from-lime-500 to-yellow-400",
    icon: TrendingUp,
    title: "Sustainable Scale",
    subtitle: "Build today, grow tomorrow.",
    text:
      "Our platforms are designed to expand as your business evolves, ensuring long-term efficiency without sacrificing performance or flexibility.",
  },
  {
    id: "collaboration",
    accent: "from-cyan-400 to-teal-400",
    icon: Users,
    title: "Collaboration First",
    subtitle: "Your vision, our expertise — one team.",
    text:
      "We work as an extension of your business, co-creating solutions through open communication, shared accountability, and trust.",
  },
  {
    id: "excellence",
    accent: "from-violet-500 to-pink-400",
    icon: CheckCircle,
    title: "Excellence in Execution",
    subtitle: "Precision. Speed. Reliability.",
    text:
      "From planning to delivery, we commit to the highest standards of quality, engineering discipline, and innovation in everything we do.",
  },
];

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurValues() {
  return (
    <Container>
      <div className="relative z-10 max-w-6xl mx-auto py-20  md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-green-300 uppercase tracking-widest text-xs font-semibold mb-3">
            The Principles Guiding Every Project
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white/80 mb-3">
            The Principles Guiding Every Project
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our work is grounded in three core principles — clarity, scalability, and precision.
            
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.article
                key={v.id}
                variants={cardVariant}
                className="relative rounded-2xl p-6 md:p-8 bg-white/4 backdrop-blur-md border border-white/6 shadow-lg overflow-hidden"
                aria-labelledby={`val-${v.id}-title`}
              >
                {/* colored accent bar + soft glow */}
                <div
                  className={`absolute inset-y-0 left-0 w-2 md:w-3 rounded-r-xl`}
                  style={{
                    background: `linear-gradient(180deg, var(--start, #0b7b27), var(--end, #43e07f))`,
                    // we'll override using CSS variables below per-card
                  }}
                />

                {/* Icon in circle */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
                    }}
                  >
                    <Icon className="w-6 h-6 text-white/90" />
                  </div>

                  <div className="flex-1">
                    <h3 id={`val-${v.id}-title`} className="text-lg text-white/60 font-semibold">
                      {v.title}
                    </h3>
                    <p className="text-green-300 text-sm mt-1 font-medium">{v.subtitle}</p>
                    <p className="mt-3 text-white/90 text-sm leading-relaxed">{v.text}</p>
                  </div>
                </div>

                {/* decorative colored glow (bottom-right) */}
                <div
                  aria-hidden
                  className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full opacity-20 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0))`,
                  }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        /* per-card accent colors via nth-child (keeps JSX clean) */
        section #our-values div > div > .motiondiv {
          /* noop to avoid unused class removal */
        }
        /* override the left accent bar color per grid item */
        section#our-values .grid > *:nth-child(1) > div[style] {
          --start: #0b7b27;
          --end: #43e07f;
        }
        section#our-values .grid > *:nth-child(2) > div[style] {
          --start: #d6b300;
          --end: #ffd24d;
        }
        section#our-values .grid > *:nth-child(3) > div[style] {
          --start: #06b6d4;
          --end: #34dce6;
        }
        section#our-values .grid > *:nth-child(4) > div[style] {
          --start: #7c3aed;
          --end: #f472b6;
        }
      `}</style>
    </Container>
  );
}
