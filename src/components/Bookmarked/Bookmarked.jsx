import React from "react";

const Bookmarked = ({ readTime, bookMarkedBlogs }) => {
  return (
    <div className="lg:w-2/6">
      {/* spend time on read section  */}
      <div className="border-1 rounded-md border border-solid border-indigo-600 bg-indigo-100 bg-opacity-50 py-4 text-center text-2xl font-semibold text-indigo-600 ">
        <p>Spent time on read : {readTime} min</p>
      </div>
      <div className="mt-4 rounded-md bg-gray-700 bg-opacity-10 px-6 py-8 font-semibold">
        <h1 className=" text-2xl ">
          Bookmarked Blogs : {bookMarkedBlogs.length}
        </h1>
        <div className="mt-4 space-y-4">
          {bookMarkedBlogs.map((markedBlog) => (
            <p
              key={markedBlog.id}
              className="rounded-md bg-white p-3  text-center font-semibold"
            >
              {markedBlog.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarked;
