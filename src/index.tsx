import * as _ from "lodash";
import { Observable } from "rxjs";
import { fetchByTypeAndId, postComment } from "./service/index";
import { Post, Comment } from "./service/typings";
import { FormContainer } from "./components/container/FormContainer";
import ReactDOM from "react-dom";
import React from "react";

const component = () => {
  const element = document.createElement("div");

  // const fetchPost1$ = Observable.fromPromise<Post>(
  //   fetchByTypeAndId("Posts", 1)
  // ).do(console.log);
  // const fetchComments$ = Observable.fromPromise<Comment>(
  //   fetchByTypeAndId("Comments")
  // ).do(console.log);
  // // const postComment$ = Observable.fromPromise(
  // //   postComment("test devant peguet")
  // // );

  // const merge$ = Observable.merge(fetchPost1$, fetchComments$);

  // merge$.subscribe(() => {});
  const wrapper = document.getElementById("form");

  wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

  return element;
};

document.body.appendChild(component());
