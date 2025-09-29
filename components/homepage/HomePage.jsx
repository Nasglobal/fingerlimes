import React from 'react'
import HeroSection from './HeroSection'
import HangingMenu from '../HangingMenu'

function HomePage() {
  return (
    <div className='bg-black relative'>
         {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#09170e] to-black" />
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/assets/images/green-wire.jpeg')" }}
      />
        <HangingMenu/>
     <HeroSection/>
    </div>

  )
}

export default HomePage

