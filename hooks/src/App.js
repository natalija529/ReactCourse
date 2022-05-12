import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
  const [selected, onSelectedChange] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>
      <Route path={"/Dropdown"}>
        <Dropdown
          labelSelect={"Select color"}
          options={options}
          selected={selected}
          onSelectedChange={onSelectedChange}
        />
      </Route>
      <Route path={"/Search"}>
        <Search />
      </Route>
      <Route path={"/Translate"}>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
