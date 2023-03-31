import React, { useEffect, useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-auto flex w-11/12 flex-col gap-4 pt-4 lg:w-4/5 lg:flex-row">
        <Blogs blogs={blogs} />
        <Bookmarked />
      </div>
      <Question />
    </div>
  );
};

export default App;
