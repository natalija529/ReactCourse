import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

//ReactDOM.render(<App />, document.querySelector("#root"));
const root = createRoot(document.querySelector("#root"));
root.render(<App tab="home" />);
