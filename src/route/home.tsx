import React from "react";
import { Route } from "react-router-dom";

export class Home extends React.Component<any> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public state: any = { id: "9GU0880R" };

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Hello, Welcome to the Home page</h1>
        <input value={this.state.id} onChange={this.handleChange} />
        <SomeComponent playerId={this.state.id} />
      </div>
    );
  }
}

const ButtonToNavigate = ({ playerId, history }) => {
  return (
    <button
      type="button"
      onClick={() => history.push("/playerClash/" + playerId)}
    >
      go to player with id {playerId}
    </button>
  );
};

const SomeComponent = ({ playerId }) => (
  <Route
    path="/"
    render={(props) => <ButtonToNavigate {...props} playerId={playerId} />}
  />
);
