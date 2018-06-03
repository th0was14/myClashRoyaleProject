import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import { fetchPlayerInfo } from "../../service/royalApi";
import { PlayerInfo } from "./PlayerClash.typings";
import { isEmpty } from "lodash";

export class PlayerClash extends React.Component {
  private myId: string = "9GU0880R";
  public state: { playerInfo: PlayerInfo } = {
    playerInfo: {}
  };
  constructor(props) {
    super(props);
    console.log(props);
    fetchPlayerInfo<PlayerInfo>("player", this.myId).subscribe(
      (playerInfo: PlayerInfo) => {
        this.setState({ playerInfo });
      },
      e => {
        toast.error(e.toString());
      }
    );
  }

  render() {
    return (
      <h1>
        Hello, {this.state.playerInfo.name}, you have{" "}
        {this.state.playerInfo.trophies} trophies
      </h1>
    );
  }
}
