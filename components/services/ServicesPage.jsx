"use client";
import React from 'react'
import ContactSection from '../homepage/ContactSection';
import Footer from '../homepage/Footer';
import HangingMenu from '../HangingMenu';
import ServicesHero from './servicesHero';
import IntroSection from './IntroSection';
import ServicesHighlights from './ServicesHighlights';
import CaseStudies from './CaseStudies';
import Spotlights from './Spotlights';


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
         <ServicesHero/>
         <IntroSection/>
         <ServicesHighlights/>
         <CaseStudies/>
         <Spotlights/>
        <ContactSection spanheader={""} header={"Let’s Build Something That Lasts"} subtile={"Whether it’s a new product, telco-scale platform, or AI-driven solution, Fingerlimes helps you turn ideas into scalable impact."}/>
        <Footer/>
      </div>
    </div>
  )
}

export default AboutUs
