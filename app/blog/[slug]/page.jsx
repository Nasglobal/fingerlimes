import React from "react";
import Container from "@/components/Container";
import HangingMenu from "@/components/HangingMenu";
import Image from "next/image";
import Footer from "@/components/homepage/Footer";
import { api } from "@/lib/api";
import BackButton from "@/components/BackButton";

async function getPost(slug) {
  const res = await fetch(`${api}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data?.[0]; // Return the first match
}


const formatDate = (date)=>{

const dt = new Date(date).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
return dt
} 

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return <div className="text-center py-20 text-white">Post not found.</div>;
  }

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
    <section className="relative  text-white pt-28 pb-20  ">
        <BackButton/>
      <div className="max-w-5xl bg-white/5  mx-auto p-4">
        <Image
          src={getImageUrl(post?.coverImage?.url)}
          alt={post?.Title}
          width={400}
          height={300}
          className="rounded-xl mb-8 w-full h-100 object-cover"
        />
        <h1 className="md:text-3xl text-lg font-bold mb-4">{post?.Title}</h1>
        <p className="text-gray-300 mb-1">By {post?.author}</p>
        <p className="text-gray-400 mb-8 text-[10px]">publshed {formatDate(post?.publishedAt)}</p>
        <article
          className="prose mb-5 prose-invert"
          dangerouslySetInnerHTML={{__html: post?.content }}
        />
      </div>
    </section>
    </Container>
    <Footer/>
    </div>
  );
}
