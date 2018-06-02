import React from "react";
import ReactDOM, { render } from "react-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Button
} from "reactstrap";
import { Route, BrowserRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Home } from "./Home";
import { Main } from "./Main";
import { NavRoute } from "./typings";

export class Layout extends React.Component {
  public state = {
    isOpen: false
  };
  private navLink: NavRoute[] = [
    { label: "Home", path: "/", component: Home, exact: true },
    { label: "Main", path: "/main", component: Main }
  ];
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  public toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  private displayLinks = (navRoutes: NavRoute[]) => {
    return navRoutes.map(({ label, path, component, exact }) => (
      <NavItem>
        <LinkContainer to={path}>
          <Button color="link" onClick={this.toggle}>
            {label}
          </Button>
        </LinkContainer>
      </NavItem>
    ));
  };

  private configRoutes = (navRoutes: NavRoute[]) => {
    return navRoutes.map(({ path, component, exact }) => (
      <Route exact={exact} path={path} component={component} />
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
          {this.configRoutes(this.navLink)}
        </div>
      </BrowserRouter>
    );
  }
}
