import React from "react";
import { Route, Link } from "react-router-dom";
import { fetchByTypeAndId } from "../service/jsonServer";
import { Jumbotron, Button, Input } from "reactstrap";
import { ListFriend } from "../components/ListFriend";

export interface HomeProps {
  id: string;
}

export interface HomeState {
  id: string;
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public state: HomeState = { id: "9GU0880R" };

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <div className="row">
            <h1 className="display-3">Hello, Welcome to the Home page</h1>
          </div>
          <div className="row">
            <ListFriend />
          </div>
          <div className="row justify-content-around">
            <Input
              className="col-4"
              value={this.state.id}
              onChange={this.handleChange}
            />
            <SomeComponent playerId={this.state.id} />
          </div>
        </Jumbotron>
      </div>
    );
  }
}

const ButtonToNavigate = ({ playerId, history }) => {
  return (
    <Button
      className="col-4"
      color="primary"
      onClick={() => history.push("/playerClash/" + playerId)}
    >
      Go to player with id {playerId}
    </Button>
  );
};

const SomeComponent = ({ playerId }) => (
  <Route
    path="/"
    render={props => <ButtonToNavigate {...props} playerId={playerId} />}
  />
);
