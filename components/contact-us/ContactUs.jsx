"use client";
import React from 'react'
import ContactSection from '../homepage/ContactSection';
import Footer from '../homepage/Footer';
import HangingMenu from '../HangingMenu';
import ContactPage from './ContactPage';



function ContactUs() {
  return (
    <div className="relative bg-black overflow-hidden">
      

      {/* Main content */}
      <div className="relative z-10">
        <HangingMenu/>
         <ContactPage/>
        <Footer/>
      </div>
    </div>
  )
}

export default ContactUs
