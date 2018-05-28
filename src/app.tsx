import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, BrowserRouter, Link, Switch } from "react-router-dom";
import { FormContainer } from "./components/container/FormContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { SideBar } from "./components/layout/SideBar";

ReactDOM.render(
  <SideBar>
    {/* <BrowserRouter>
      <div>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/main">Main</Link>
          </li>
          </ul>
          
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    </BrowserRouter> */}
  </SideBar>,
  document.getElementById("root")
);
