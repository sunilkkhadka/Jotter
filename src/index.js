import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Adding CSS
import "./style.scss";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import noteReducer from "../src/features/noteSlice";

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
