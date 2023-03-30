import React from "react";

const Header = () => {
  return (
    <div className="flex h-20 items-center justify-between px-[10%] shadow-md">
      <h1 className="text-3xl font-bold">Programming Adda</h1>
      <img
        className="h-12 w-12 rounded-full object-cover"
        src="https://images.pexels.com/photos/4064839/pexels-photo-4064839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
};

export default Header;
