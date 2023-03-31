import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blogs from "./components/Blogs/Blogs";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookMarkedBlogs, setBookMarkedBlogs] = useState([]);

  const handleMarkAsRead = (time) => {
    setReadTime(readTime + time);
  };

  const handleBookMark = (blog) => {
    const ifExist = bookMarkedBlogs.find(
      (singleBlog) => singleBlog.id === blog.id
    );
    if (ifExist && ifExist.id === blog.id) {
      toast.error("You Have Already Bookmarked This Blog", {
        position: "top-center",
      });
    } else {
      setBookMarkedBlogs([...bookMarkedBlogs, blog]);
      localStorage.setItem("bookmark", JSON.stringify(bookMarkedBlogs));
    }
  };

  useEffect(() => {
    fetch("./fakeData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-auto flex w-11/12 flex-col gap-4 pt-4 lg:w-4/5 lg:flex-row">
        <Blogs
          blogs={blogs}
          handleMarkAsRead={handleMarkAsRead}
          handleBookMark={handleBookMark}
        />
        <Bookmarked readTime={readTime} bookMarkedBlogs={bookMarkedBlogs} />
      </div>
      <Question />
    </div>
  );
};

export default App;
