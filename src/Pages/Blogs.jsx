import React from "react";
import Blog from "../component/Blog";
import { blogPosts } from "../utils/blogData";

const Blogs = () => {
  return (
    <div>
      <section className="relative w-full h-1/2 overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-[-5]" />
      </section>
      <section className="flex justify-center items-center h-full">
        <Blog blogPosts={blogPosts} />
      </section>
    </div>
  );
};

export default Blogs;
