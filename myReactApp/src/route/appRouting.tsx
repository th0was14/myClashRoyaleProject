import React from "react";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from "reactstrap";
import { BrowserRouter, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ToastContainer } from "react-toastify";
import { Home } from "./home";
import { Main } from "./main";
import { NavRoute } from "./typings";
import { PlayerPage } from "./playerPage";

export interface LayoutProps {
  name?: string;
}

export interface LayoutState {
  isOpen: boolean;
}

export class AppRouting extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  public state: LayoutState = {
    isOpen: false
  };
  private navLink: NavRoute[] = [
    { id: "home", label: "Home", path: "/", component: Home, exact: true },
    { id: "main", label: "Main", path: "/main", component: Main },
    {
      id: "player",
      label: "Player Clash",
      path: "/playerClash/:playerId",
      url: "/playerClash/9GU0880R",
      component: PlayerPage
    }
  ];

  public toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  private displayLinks = (navRoutes: NavRoute[]) => {
    return navRoutes.map(({ id, label, path, url, component, exact }) => (
      <NavItem key={id}>
        <LinkContainer to={url || path}>
          <Button color="link" onClick={this.toggle}>
            {label}
          </Button>
        </LinkContainer>
      </NavItem>
    ));
  };

  private configRoutes = (navRoutes: NavRoute[]) => {
    return navRoutes.map(({ id, path, component, exact }) => (
      <Route key={id} exact={exact} path={path} component={component} />
    ));
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Test RoyalApi</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.displayLinks(this.navLink)}
              </Nav>
            </Collapse>
          </Navbar>
          <hr />
          <ToastContainer />
          {this.configRoutes(this.navLink)}
        </div>
      </BrowserRouter>
    );
  }
}
