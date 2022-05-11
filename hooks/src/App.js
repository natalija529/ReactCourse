import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const options = [
  {
    label: "the  value of red",
    value: "red",
  },
  {
    label: "the  value of red2",
    value: "red2",
  },
  {
    label: "the  value of red3",
    value: "red3",
  },
];

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
