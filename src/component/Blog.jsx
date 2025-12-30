import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../utils/blogData";

const Blog = () => {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <section className="p-5 poppins-regular">
      <div className="w-11/12 mx-auto">
        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post) => (
            <div key={post.id} className="mb-5">
              <div
                onClick={() => handlePostClick(post.id)}
                className="relative bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-80">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <p className="text-blue-600 font-medium">Read full story</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <article
                key={post.id}
                onClick={() => handlePostClick(post.id)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full flex flex-col"
              >
                {/* Fixed-height image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content area */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 text-justify">
                      {post.excerpt.split(" ").slice(0, 20).join(" ")}
                      <span>...</span>
                    </p>
                  </div>

                  {/* Button pinned at bottom */}
                  <Link
                    to={`/blogs/${post.id}`}
                    className="text-blue-600 font-medium"
                  >
                    Read full story →
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
