import React from "react"; 
import Image from "next/image";
import HangingMenu from "@/components/HangingMenu";
import Footer from "@/components/homepage/Footer";
import Container from "@/components/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { api } from "@/lib/api";

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const res = await fetch(`${api}/api/blog-posts?filters[category][slug][$eq]=${slug}&populate=*`);
  const { data: posts } = await res.json();


  const getImageUrl = (url) => {
  if (!url) return "assets/images/placeholder.PNG";
  if (url.startsWith("http")) return url; // already absolute from Strapi Cloud
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
};


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#09170e] to-black z-0" />

      {/* Fixed background image */}
      <div
        className="absolute inset-0 bg-fixed bg-center opacity-50 mix-blend-overlay pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/images/green-wire.jpeg')" }}
      />
      <Container>
        <HangingMenu/>
        {posts.length < 1 ?  <section className="relative capitalize text-center h-[400px] text-white text-lg md:px-10 pt-38 pb-20">{slug.replace("_", " ")} blog posts not found  </section>: 
    <section className="relative text-white md:px-10 pt-28 pb-20"> 
      
      <h1 className="text-3xl font-bold mb-10 text-center capitalize">{slug.replace("_", " ")}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white/10 p-4 rounded-xl">
            <Image
              width={400}
              height={300}
              src={`${getImageUrl(post?.coverImage?.url)}`}
              className="rounded-lg mb-4"
              alt={post?.Title}
            />
            <h2 className="text-xl font-semibold mb-2">{post?.Title}</h2>
            <p className="text-white/70">{post?.excerpt}</p>

            <Link
            href={`/blog/${post?.slug}`}
            className="inline-flex items-center mt-2 gap-2 text-green-400 font-semibold hover:underline group"
            >
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>}
    </Container>
    <Footer />
    </div>
  );
}
