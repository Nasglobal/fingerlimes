"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import Link from "next/link";
import { api } from "@/lib/api";
import SpinnerLoader from "../SpinnerLoader";

// const posts = [
//   {
//     id: 1,
//     title: "Why Strategy Before Code Delivers Better Outcomes",
//     teaser:
//       "Understand why business clarity matters before building technology solutions.",
//     image: "/assets/images/strategy.PNG",
//   },
//   {
//     id: 2,
//     title: "Scaling Across Africa: Lessons from Telco Integrations",
//     teaser:
//       "Insights from real-world integrations with MTN, Airtel, GLO, and 9Mobile.",
//     image: "/assets/images/telco.PNG",
//   },
//   {
//     id: 3,
//     title: "AI Beyond the Hype: Turning Data into Real Business Value",
//     teaser:
//       "How predictive analytics and AI can drive smarter decisions for growth and innovation.",
//     image: "/assets/images/ai.PNG",
//   },
// ];

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

export default function FeaturedPosts() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBlogPosts()
      
  }, []);


    const getBlogPosts = async()=>{
         setLoading(true)
        try {
        const res = await fetch(`${api}/api/blog-posts?populate=*`);
        const { data: cat_posts } = await res.json();
        setPosts(cat_posts)
        setLoading(false)
  
    } catch (error) {
      console.log("error fetching blog post")
      setLoading(false)
      
    }
         
      }

  return (
    <section className="relative py-20 md:py-28  text-white overflow-hidden">
      <Container>
      <div className="relative max-w-7xl mx-auto md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Thought Leadership That <span className="text-green-400">Drives Change</span>
          </h2>
          {/* <p className="text-white/70 max-w-2xl mx-auto">
            Perspectives on scaling sustainably, transforming with technology, and staying
            ahead in a data-driven world.
          </p> */}
        </motion.div>

        {/* Posts Grid */}
        {loading ? <SpinnerLoader/> :

        <>
        {posts.length > 0 ?

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {posts.slice(0, 9).map((post) => (
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
        </div>:
        <p className="text-sm text-center ">No featured post found</p>  
      }
        
        </>
        
   }
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-green-400 hover:text-black transition"
          >
            Explore All Articles
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a> */}
        </motion.div>
      </div>
      </Container>
    </section>
  );
}
