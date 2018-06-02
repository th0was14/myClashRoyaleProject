import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Router,
  Route,
  BrowserRouter,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import { FormContainer } from "./components/container/FormContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/layout/Home";
import { Main } from "./components/layout/Main";

import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Layout } from './components/layout/Layout';

ReactDOM.render(
  <Layout/>,
  document.getElementById("root")
);
