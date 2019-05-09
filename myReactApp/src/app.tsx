import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import * as ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { AppRouting } from "./route/appRouting";
// @flow

ReactDOM.render(
  <Provider store={store}>
    <AppRouting />
  </Provider>,
  document.getElementById("root")
);
