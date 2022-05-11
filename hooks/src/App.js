import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is react",
    content: "React is front end js framework",
  },
  {
    title: "What is react2",
    content: "React is front end js framework2",
  },
  {
    title: "What is react3",
    content: "React is front end js framework3",
  },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
