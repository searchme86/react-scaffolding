import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools);
console.log(store);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
