import React from "react";
import ReactDOM from "react-dom";

import { toast } from "react-toastify";
import { fetchPlayerInfoObservable } from "../../service/royalApi";
import { PlayerInfo } from "./PlayerClash.typings";
import { isEmpty } from "lodash";
import { Jumbotron } from "reactstrap";
import store from "../../store";

export interface PlayerProps {
  playerInfo: PlayerInfo;
}
export interface PlayerDispatch {
  fetchPlayer1: (playerId) => void;
}

type IPlayer = PlayerProps & PlayerDispatch;

export class PlayerClash extends React.Component<IPlayer> {
  private myId: string = "9GU0880R";
  constructor(props: IPlayer) {
    super(props);
    this.props.fetchPlayer1(this.myId);
  }

  render() {
    const { name, clanName } = this.props.playerInfo;
    const { player } = store.getState();

    if (player.isFetching) {
      return <span>Loading ...</span>;
    }
    return (
      <Jumbotron>
        <h1 className="display-3">
          Hello, {name} of clan {clanName}!
        </h1>
      </Jumbotron>
    );
  }
}
