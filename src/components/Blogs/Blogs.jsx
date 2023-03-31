import React from "react";

const Blogs = () => {
  return (
    <div className="w-4/6 space-y-4 rounded-md bg-gray-700 bg-opacity-10 p-4">
      {/* one blog here  */}
      <div className="rounded-md bg-white p-4">
        <div className="h-[53vh] ">
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="h-12 w-12">
              <img
                className="h-full w-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Mr. Raju</h2>
              <p className="text-sm font-medium text-zinc-700">12 oct 22</p>
            </div>
          </div>
          <div className="pr-3 font-medium text-black text-opacity-60">
            05 min read{" "}
          </div>
        </div>

        <div className="mt-4 pl-3">
          <h1 className="text-2xl font-bold">
            The Importance of Accessibility and Inclusivity in Web Development
          </h1>
          <p className="space-x-4 pt-4 font-medium text-black text-opacity-60">
            <span>#programming</span> <span>#codding</span>
            <span>#beginners</span>
          </p>
          <p className="mt-4 cursor-pointer text-lg font-medium text-indigo-800 underline">
            Mark as read
          </p>
        </div>
      </div>
      {/* one blog here  */}
      <div className="rounded-md bg-white p-4">
        <div className="h-[53vh] ">
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="h-12 w-12">
              <img
                className="h-full w-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Mr. Raju</h2>
              <p className="text-sm font-medium text-zinc-700">12 oct 22</p>
            </div>
          </div>
          <div className="pr-3 font-medium text-black text-opacity-60">
            05 min read{" "}
          </div>
        </div>

        <div className="mt-4 pl-3">
          <h1 className="text-2xl font-bold">
            The Importance of Accessibility and Inclusivity in Web Development
          </h1>
          <p className="space-x-4 pt-4 font-medium text-black text-opacity-60">
            <span>#programming</span> <span>#codding</span>
            <span>#beginners</span>
          </p>
          <p className="mt-4 cursor-pointer text-lg font-medium text-indigo-800 underline">
            Mark as read
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="inline-block cursor-pointer select-none rounded-md bg-indigo-500 px-4 py-1 text-center text-2xl font-semibold text-white delay-100 ease-in-out hover:bg-indigo-900">
          Show all
        </div>
      </div>
    </div>
  );
};

export default Blogs;
