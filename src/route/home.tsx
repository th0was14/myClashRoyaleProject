import React from "react";
import { Route, Link } from "react-router-dom";
import { fetchByTypeAndId } from "../service/jsonServer/index";

export class Home extends React.Component<any> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    fetchByTypeAndId("clashFriend").then(clashFriends =>
      this.setState({ clashFriends })
    );
  }

  public state: any = { id: "9GU0880R", clashFriends: [] };

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Hello, Welcome to the Home page</h1>
        <ul>
          {this.state.clashFriends
            ? this.state.clashFriends.map(friend => (
                <li key={friend.id}>
                  {friend.name} :{" "}
                  <Link to={"/playerClash/" + friend.clashId}>
                    {friend.clashId}
                  </Link>
                </li>
              ))
            : ""}
        </ul>
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
    render={props => <ButtonToNavigate {...props} playerId={playerId} />}
  />
);
