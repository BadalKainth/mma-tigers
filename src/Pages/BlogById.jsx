import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../utils/blogData";

const BlogById = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">Blog not found</h1>
        <Link to="/blogs" className="text-blue-600 underline mt-4 inline-block">
          Go back to blog list
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 poppins-regular">
      <Link
        to="/blogs"
        className="mb-2 md:mb-5 inline-block px-2 py-1 md:px-4 md:py-2 text-sm bg-blue-500 text-white poppins-medium rounded-md hover:bg-blue-700"
      >
        ← Back
      </Link>

      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-lg mb-6 w-full"
      />
      <h1 className="text-xl md:text-3xl poppins-semibold text-gray-900 mb-4">
        {blog.title}
      </h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>{blog.category}</span> • <span>{blog.date}</span> •{" "}
        <span>{blog.readTime}</span>
      </div>

      <div className="prose max-w-none text-sm md:text-lg ">
        {blog.content.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="text-lg md:text-2xl poppins-medium md:poppins-semibold mt-6 mb-3"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "paragraph") {
            return (
              <p
                key={index}
                className="text-gray-700 text-sm md:text-lg leading-relaxed text-justify mb-4"
              >
                {block.text}
              </p>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc list-inside mb-4">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 text-sm md:text-lg text-justify"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogById;
