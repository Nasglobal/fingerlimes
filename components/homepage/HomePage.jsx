import React from 'react'
import HeroSection from './HeroSection'
import HangingMenu from '../HangingMenu'
import ValueSnapshot from './ValueSnapshot'
import AboutPreview from './AboutPreview'
import ServicesHighlights from './ServiceHighlights'
import CaseStudySpotlight from './CaseStudySpotlight'
import BlogTeaser from './BlogTeaser'
import ContactSection from './ContactSection'
import Footer from './Footer'

function HomePage() {
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
        <HangingMenu />
        <HeroSection />
        <ValueSnapshot />
        <AboutPreview/>
        <ServicesHighlights/>
        <CaseStudySpotlight/>
        <BlogTeaser/>
        <ContactSection/>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage
