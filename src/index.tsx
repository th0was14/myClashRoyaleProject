import * as _ from "lodash";
import { Observable } from "rxjs";
import { servicePost } from "./service/index";
import { Post } from "./service/typings";
import { FormContainer } from "./components/container/FormContainer";
import ReactDOM from "react-dom";
import React from "react";

const component = () => {
  const element = document.createElement("div");
  const servicePost$ = Observable.fromPromise<Post>(servicePost());

  servicePost$.subscribe(() => {});

  const wrapper = document.getElementById("form");

  wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

  return element;
};

document.body.appendChild(component());
