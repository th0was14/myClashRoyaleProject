import * as React from "react";
import * as ReactDOM from "react-dom";
import { FormContainer } from "./components/container/FormContainer";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <div>
    <h1>Hello, Welcome to the first page</h1>
    <FormContainer />
  </div>,
  document.getElementById("root")
);
