"use client";
import React from 'react'
import Footer from '../homepage/Footer';
import HangingMenu from '../HangingMenu';
import BlogHero from './BlogHero';
import FeaturedPosts from './FeaturedPosts';
import BlogCategories from './BlogCategories';
import BlogSubscribe from './BlogSubscribe';
import BlogContact from './BlogContact';




function Blog() {
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
         <BlogHero/>
         <FeaturedPosts/>
         <BlogCategories/>
         <BlogSubscribe/>
        <BlogContact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Blog
