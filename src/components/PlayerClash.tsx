import React from "react";
import ReactDOM from "react-dom";

import { toast } from "react-toastify";
import { fetchPlayerInfoObservable } from "../service/royalApi";
import { PlayerInfo } from "./PlayerClash.typings";
import { isEmpty } from "lodash";
import { Jumbotron, Alert } from "reactstrap";
import store from "../store";

export interface PlayerProps {
  playerInfo: PlayerInfo;
  isFetching: boolean;
  errorMessage: string;
  inError: boolean;
}
export interface PlayerDispatch {
  fetchPlayer1: () => void;
}

type IPlayer = PlayerProps & PlayerDispatch;

export class PlayerClash extends React.Component<IPlayer> {
  constructor(props: IPlayer) {
    super(props);
    this.props.fetchPlayer1();
  }

  render() {
    const { name, clanName } = this.props.playerInfo;
    let element: JSX.Element;
    if (this.props.isFetching) {
      element = <span>Loading ...</span>;
    } else if (this.props.inError) {
      element = <Alert color="danger">{this.props.errorMessage}</Alert>;
    } else {
      element = (
        <Jumbotron>
          <h1 className="display-3">
            Hello, {name} of clan {clanName}!
          </h1>
        </Jumbotron>
      );
    }
    return element;
  }
}
