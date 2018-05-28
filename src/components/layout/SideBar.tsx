import React from "react";
import ReactDOM from "react-dom";

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Collapsible Sidebar</h3>
            <strong>BS</strong>
          </div>
        </nav>
      </div>
    );
  }
}
