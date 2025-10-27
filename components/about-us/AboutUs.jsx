"use client";
import React from 'react'
import ContactSection from '../homepage/ContactSection';
import Footer from '../homepage/Footer';
import AboutHero from './AboutHero';
import HangingMenu from '../HangingMenu';
import WhoWeAre from './WhoWeAre';
import OurValues from './OurValues';
import OurExpertise from './OurExpertise';
import GlobalPresence from './GlobalPresence';

function AboutUs() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#09170e] to-black z-0" />

      {/* Fixed background image */}
      <div
        className="absolute inset-0 bg-fixed bg-center opacity-50 mix-blend-overlay pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/images/green-wire.jpeg')" }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <HangingMenu/>
        <AboutHero/>
        <WhoWeAre/>
        <OurValues/>
        <OurExpertise/>
        <GlobalPresence/>
        <ContactSection spanheader={""} header={"Let’s Turn Your Ideas Into Scalable Platforms"} subtile={"Whether you’re building a new product, expanding into new markets, or exploring AI-driven insights, Fingerlimes is your partner for sustainable growth."}/>
        <Footer/>
      </div>
    </div>
  )
}

export default AboutUs
