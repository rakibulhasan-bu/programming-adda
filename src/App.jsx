import React from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto flex w-11/12 flex-col gap-4 pt-4 lg:w-4/5 lg:flex-row">
        <Blogs />
        <Bookmarked />
      </div>
      <Question />
    </div>
  );
};

export default App;
