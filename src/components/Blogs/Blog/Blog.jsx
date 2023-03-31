import React from "react";

const Blog = ({ blog }) => {
  const { firstName, lastName, title, time, profileImage, coverImage, date } =
    blog;

  return (
    <>
      {/* one blog here  */}
      <div className="rounded-md bg-white p-4">
        <div className="h-[53vh] ">
          <img
            className="h-full w-full rounded-md object-cover"
            src={coverImage}
            alt=""
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="h-12 w-12">
              <img
                className="h-full w-full rounded-full object-cover"
                src={profileImage}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {firstName} {lastName}
              </h2>
              <p className="text-sm font-medium text-zinc-700">{date}</p>
            </div>
          </div>
          <div className="pr-3 font-medium text-black text-opacity-60">
            <span>
              {time < 10 ? "0" : ""}
              {time} min read
            </span>
          </div>
        </div>

        <div className="mt-4 pl-3">
          <h1 className="text-2xl font-bold"> {title} </h1>
          <p className="space-x-4 pt-4 font-medium text-black text-opacity-60">
            <span>#programming</span> <span>#codding</span>{" "}
            <span>#beginners</span>
          </p>
          <p className="mt-4 cursor-pointer text-lg font-medium text-indigo-800 underline">
            Mark as read
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
