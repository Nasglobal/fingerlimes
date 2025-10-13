"use client";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall,MapPin,MailIcon } from "lucide-react";
import Container from "../Container";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 text-white overflow-hidden border-t border-gray-500 "
    >
      <Container>
      <div className="relative z-10 max-w-4xl mx-auto px-2 md:px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-extrabold mb-6">
            Every Big Outcome Starts With a{" "}
            <span className="text-green-400">Simple Conversation</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm  mb-12">
            Whether you’re building a new product, scaling into new markets, or exploring
            AI-driven opportunities, we’re here to help.
          </p>
        </motion.div>

        {/* Locations & Contacts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-3 text-sm text-white/80 mb-10"
        >
          <p className="flex md:justify-center md:text-center text-left"><MapPin className="w-5 h-5 mr-1 text-green-400"/> <span className="font-semibold  text-white">London Office</span></p>
          <p className="flex md:justify-center md:text-center text-left"><MapPin className="w-5 h-5 mr-1 text-green-400"/> <span className="font-semibold  text-white">Lagos Office</span></p>
          <p className="flex md:justify-center md:text-center text-left"><MailIcon className="w-5 h-5 mr-1 text-green-400"/> <a href="mailto:hello@fingerlimes.com" className="hover:text-green-400 transition-colors">hello@fingerlimes.com</a></p>
          <p className="flex md:justify-center md:text-center text-left"><PhoneCall className="w-4 h-4 mr-1 text-green-400" /> +44 XXX XXX XXXX | +234 XXX XXX XXXX</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/contact"
            className="group px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="/book"
            className="group px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-green-400" />
            Book a Call
          </a>
        </motion.div>

        {/* Decorative glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[160px] rounded-full pointer-events-none"></div>
      </div>
      </Container>
    </section>
  );
}
