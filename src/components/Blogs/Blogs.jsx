import React from "react";
import Blog from "./Blog/Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="w-4/6 space-y-4 rounded-md bg-gray-700 bg-opacity-10 p-4">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}

      <div className="flex justify-center">
        <div className="inline-block cursor-pointer select-none rounded-md bg-indigo-500 px-4 py-1 text-center text-2xl font-semibold text-white delay-100 ease-in-out hover:bg-indigo-900">
          Show all
        </div>
      </div>
    </div>
  );
};

export default Blogs;
