"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Container from "../Container";

export default function BlogContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className=" bg-black text-white overflow-hidden">
        <Container>
      {/* 1️⃣ Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="mb-2"
        >
         <motion.img
  src="/assets/images/connect.png"
  alt="Rotating network"
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
  className="md:w-[400px] md:h-[400px] h-[300px] w-[300px] rounded-full mb-2"
/>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-2xl md:text-4xl font-extrabold italic mb-6 z-10"
        >
          {"Let’s Talk About What’s Next"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-white/70 text-sm max-w-2xl mx-auto z-10"
        >
          {"Whether you’re building a product, scaling your operations, or exploring AI solutions, we’re ready to help your business grow."}
        </motion.p>
      </section>

      {/* 2️⃣ Contact Form Section */}
      <section className="relative py-5  bg-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl font-semibold text-green-500 my-10 text-center"
          >
            Start a Conversation
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400/40"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400/40"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400/40 md:col-span-2"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
              className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400/40 md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="group md:col-span-2 px-8 py-3 bg-green-500 text-black font-semibold rounded-full flex justify-center items-center gap-2 hover:scale-105 transition-transform"
            >
              Send Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {submitted && (
            <p className="text-center text-green-400 mt-6">
              ✅ {"Message sent successfully. We’ll get back to you within 24 hours."}
            </p>
          )}
        </div>
      </section>

      {/* 3️⃣ Office Locations */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black to-[#08140d]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-4xl text-xl font-bold text-center md:mb-16"
        >
          Where to Find Us
        </motion.h2>

        

        {/* Map section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full h-[400px] md:h-[500px] mb-5 flex items-center justify-center"
                >
                  {/* World Map Image */}
                   
                  <Image
                    src="/assets/images/map-globe.png"
                    alt="World map"
                    fill
                    className="object-contain opacity-60"
                    priority
                  />
                 
        
                  {/* London Pin */}
                  <motion.div
                    className="absolute left-[35%] top-[28%] flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="relative">
                      <MapPin className="w-10 h-10 text-green-400 animate-pulse" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white">London</span>
                    </div>
                  </motion.div>
        
                  {/* Lagos Pin */}
                  <motion.div
                    className="absolute left-[55%] top-[70%] flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="relative">
                      <MapPin className="w-10 h-10 text-green-400 animate-pulse" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white">Lagos</span>
                    </div>
                  </motion.div>
                </motion.div>



                <div className="max-w-5xl items-center mx-auto grid md:grid-cols-2 gap-10 text-white/80">
          <div className=" flex flex-col justify-end md:items-end md:pr-10">
            <h3 className="text-2xl font-semibold mb-3 text-green-400">London Office</h3>
            <p>123 Tech Street, London, UK</p>
            <p className="flex items-center gap-2 mt-2">
              <Phone className="w-4 h-4" /> +44 XXX XXX XXXX
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@fingerlimes.com
            </p>
          </div>

          <div className="md:pl-10">
            <h3 className="text-2xl font-semibold mb-3 text-green-400">Lagos Office</h3>
            <p>45 Innovation Drive, Lagos, Nigeria</p>
            <p className="flex items-center gap-2 mt-2">
              <Phone className="w-4 h-4" /> +234 XXX XXX XXXX
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@fingerlimes.com
            </p>
          </div>
        </div>
        
      </section>

      {/* 4️⃣ Alternative Contact / Social */}
      <section className="py-20 bg-black/80 backdrop-blur-md text-center">
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
          <a href="#" className="hover:text-green-400 transition"><Linkedin /></a>
          <a href="#" className="hover:text-green-400 transition"><Twitter /></a>
          <a href="mailto:hello@fingerlimes.com" className="hover:text-green-400 transition"><Mail /></a>
          <a href="tel:+234XXXXXXXXXX" className="hover:text-green-400 transition"><Phone /></a>
        </div>
      </section>

      {/* 5️⃣ Final Sticky CTA */}
      <section className="relative pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button className="group px-8 py-3 bg-green-400 text-black font-semibold rounded-full mx-2 hover:scale-105 transition-transform">
            Start a Conversation
          </button>
          <button className="group px-8 py-3 border border-green-400 text-green-400 rounded-full mx-2 mt-5 md:mt-0 hover:bg-green-400 hover:text-black transition-transform">
            Book a Call
          </button>
        </motion.div>
      </section>
      </Container>
    </main>
  );
}
