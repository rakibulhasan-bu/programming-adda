import React, { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({ blogs, handleMarkAsRead, handleBookMark }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="space-y-4 rounded-md bg-gray-700 bg-opacity-10 md:p-4 lg:w-4/6">
      {blogs.slice(0, showAll ? 10 : 2).map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleMarkAsRead={handleMarkAsRead}
          handleBookMark={handleBookMark}
        />
      ))}

      {!showAll && (
        <div className="flex justify-center">
          <div
            onClick={() => setShowAll(true)}
            className="inline-block cursor-pointer select-none rounded-md bg-indigo-500 px-4 py-1 text-center text-2xl font-semibold text-white delay-100 ease-in-out hover:bg-indigo-900"
          >
            Show all
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
