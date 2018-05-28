import React from "react";
import ReactDOM from "react-dom";
import { Navbar, NavbarBrand, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  public title: string = "Test App";

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{this.title}</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/main">main</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
