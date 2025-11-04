"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send,BookAIcon,Linkedin,Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b1a10] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,100,0.05),_transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-xl md:text-4xl font-extrabold mb-4">
            Every Big Outcome Starts With a{" "}
            <span className="text-green-400">Simple Conversation</span>
          </h1>
          <p className="text-white/70 max-w-3xl text-sm mx-auto">
            {"Whether you’re building a new product, scaling into new markets, or exploring AI-driven opportunities — we’re here to help."}
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {[
            { icon: Mail, title: "Email", text: "md@fingerlimesgroup.com" },
            {
              icon: Phone,
              title: "Call Us",
              text: "+447502867951  | +2348067598894 ",
            },
            {
              icon: MapPin,
              title: "Our Offices",
              text: "📍 London office Address: Brayford Square London England E1 0SG •  📍 Lagos Office: 5a Ayo Jagun Street, Lekki Phase 1, Lagos Nigeria",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center hover:border-green-400/30 transition"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.text}</p>
              </motion.div>
            );
          })}

           <motion.div
                
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center hover:border-green-400/30 transition"
              >
                <div className="flex justify-center mb-4">
                  <BookAIcon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
                <a href="https://fingerlimes.youcanbook.me" className="text-white/70 text-sm underline">Click to book appointment with us</a>
              </motion.div>
        </motion.div>

        {/* Contact Form */}
        
        

        {/* 4️⃣ Alternative Contact / Social */}
      <section className="py-20 backdrop-blur-md text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Connect With Us
        </motion.h2>
        <p className="text-white/70 mb-8">
          Follow us for insights, updates, and conversations around technology and business growth.
        </p>

        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/company/eltonmichael/ " className="hover:text-green-400 transition"><Linkedin /></a>
          <a href="#" className="hover:text-green-400 transition"><Twitter /></a>
          <a href="mailto:md@fingerlimesgroup.com" className="hover:text-green-400 transition"><Mail /></a>
          <a href="tel:+447502867951" className="hover:text-green-400 transition"><Phone /></a>
        </div>
      </section>

      {/* 5️⃣ Final Sticky CTA */}
      <section className="relative pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="#" className="group px-8 py-3 bg-green-400 text-black font-semibold rounded-full mx-2 hover:scale-105 transition-transform">
            Start a Conversation
          </Link>
          <a
          href="https://fingerlimes.youcanbook.me"
           className="group px-8 py-3 border border-green-400 text-green-400 rounded-full mx-2 mt-5 md:mt-0 hover:bg-green-400 hover:text-black transition-transform">
            Book Appointment
          </a>
        </motion.div>
      </section>
      </div>
    </section>
  );
}
