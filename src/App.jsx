import React from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto flex w-4/5 flex-col gap-4 pt-4 lg:flex-row">
        <Blogs />
        <Bookmarked />
      </div>
    </div>
  );
};

export default App;
