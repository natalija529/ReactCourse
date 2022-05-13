import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const constainer = document.querySelector("#root");

const root = ReactDOM.createRoot(constainer);

root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);

//ReactDOM.render(<App />, document.querySelector("#root"));
