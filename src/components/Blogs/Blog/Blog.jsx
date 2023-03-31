import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blog, handleMarkAsRead, handleBookMark }) => {
  const { firstName, lastName, title, time, profileImage, coverImage, date } =
    blog;

  return (
    <>
      <div className="rounded-md bg-white md:p-4">
        <div className="h-[20vh] md:h-[30vh] lg:h-[53vh] ">
          <img
            className="h-full w-full rounded-md object-cover"
            src={coverImage}
            alt=""
          />
        </div>

        <ToastContainer />

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="h-10 w-10 md:h-12 md:w-12">
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
          <div className="space-x-2 pr-3 font-medium text-black text-opacity-60">
            <span>
              {time < 10 ? "0" : ""}
              {time} min read
            </span>
            <span
              onClick={() => handleBookMark(blog)}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faCoffee} />
            </span>
          </div>
        </div>

        <div className="mt-2 pl-3 md:mt-4">
          <h1 className="text-xl font-bold md:text-2xl"> {title} </h1>
          <p className="space-x-4 pt-4 font-medium text-black text-opacity-60">
            <span>#programming</span> <span>#codding</span>{" "}
            <span>#beginners</span>
          </p>
          <p className="mt-4 text-lg font-medium text-indigo-800 underline">
            <span
              onClick={() => handleMarkAsRead(time)}
              className=" cursor-pointer select-none"
            >
              Mark as read
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
