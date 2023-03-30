import React from "react";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between px-[10%] shadow-md lg:h-20">
      <h1 className="text-xl font-bold lg:text-3xl">Programming Adda</h1>
      <img
        className="h-12 w-12 rounded-full object-cover"
        src="https://images.pexels.com/photos/4064839/pexels-photo-4064839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
};

export default Header;
