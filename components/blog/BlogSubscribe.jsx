"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import Container from "../Container";

export default function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-20 bg-black md:py-28 text-white  overflow-hidden">
     <Container>

      <div className="relative rounded-xl border border-white/40 z-10 max-w-4xl mx-auto py-14 px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Stay Ahead With Fingerlimes Insights
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-2xl mx-auto mb-10"
        >
          Join our newsletter to get practical insights, case studies, and tech strategies
          delivered straight to your inbox.
        </motion.p>

        {/* Subscription Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-5 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/40"
            required
          />
          <button
            type="submit"
            className="group px-8 py-3 rounded-full bg-green-400 text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
          >
            Subscribe
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>

        {/* Confirmation Message */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-green-400 font-medium"
          >
            ✅ {"You’re subscribed! Expect fresh insights soon."}
          </motion.p>
        )}
      </div>

     </Container>
    </section>
  );
}
