"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";



function BackButton() {
    const router = useRouter();
  return (
    <motion.button
  onClick={() => router.back()}
  whileHover={{ x: -3, scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center md:ml-16 gap-2 px-4 py-2 my-5 rounded-full 
             bg-white/10 backdrop-blur-md text-white/90 
             border border-white/20 hover:bg-white/20 
             transition-all mb-6 shadow-md"
>
  <ArrowLeft className="w-4 h-4" />
  Back to Posts
</motion.button>
  )
}

export default BackButton

