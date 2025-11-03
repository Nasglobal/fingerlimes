"use client";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";
import SpinnerLoader from "../SpinnerLoader";

const categories = [
  {
    name:"Digital Transformation",
    slug:"digital_transformation"
  },
  {
    name:"AI and Data",
    slug:"ai_and_data"
  },
   {
    name:"Product Development",
    slug:"product_development"
  },
   {
    name:"Telco Integrations",
    slug:"telco_integrations"
  },
   {
    name:"Case Studies",
    slug:"case_studies",
  }, 
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("Digital Transformation");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    getCategoryPosts("digital_transformation")
  },[])
  

    const getCategoryPosts = async(slug)=>{
       setLoading(true)
      try {
      const res = await fetch(`${api}/api/blog-posts?filters[category][slug][$eq]=${slug}&populate=*`);
      const { data: cat_posts } = await res.json();
      setPosts(cat_posts)
      setLoading(false)

  } catch (error) {
    console.log("error fetching blog post")
    setLoading(false)
    
  }
       
    }

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-[#08140d] to-black text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,100,0.05),_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-6"
        >
          Find Insights That Matter to You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-2xl text-sm mx-auto mb-14"
        >
          Filter by topic to discover insights relevant to your business.
        </motion.p>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => {setActiveCategory(category.name);getCategoryPosts(category.slug)}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-md shadow-md ${
                activeCategory === category?.name
                  ? "bg-green-400 text-black border-green-500"
                  : "bg-white/5 text-white/80 border-white/10 hover:border-green-400/40"
              }`}
            >
               {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeCategory}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl  font-bold italic">{activeCategory}</h3>
        </motion.div>

        {loading ? <SpinnerLoader/>:
                <div
                  
                  className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-10"
                >
                  {posts.slice(0, 3).map((post) => (
                    <motion.article
                      key={post.id}
                      variants={card}
                      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:scale-[1.03] hover:border-green-400/30 transition-transform duration-500 backdrop-blur-md"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image
                          src={`${api}${post?.coverImage?.url}`}
                          alt={post?.Title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      </div>
        
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{post?.Title}</h3>
                        <p className="text-white/70 text-sm mb-4">{post?.excerpt}</p>
        
                        <Link
                          href={`/blog/${post?.slug}`}
                          className="inline-flex items-center gap-2 text-green-400 font-semibold hover:underline group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>}
        
                {/* CTA */}

                {posts.length > 0  ?
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-16"
                >
                  <Link
                    href={`/blog/category/${activeCategory.toLocaleLowerCase().replace(" ","_")}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-green-400 hover:text-black transition"
                  >
                    Explore All {activeCategory} Articles
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                :<p className="text-center text-lg text-white mt-3">No post found for {activeCategory} </p>}
      </div>
    </section>
  );
}
