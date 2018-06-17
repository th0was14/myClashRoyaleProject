import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import * as ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Layout } from "./components/layout/Layout";
// @flow

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
