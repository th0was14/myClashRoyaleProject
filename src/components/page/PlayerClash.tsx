import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import { fetchPlayerInfo } from "../../service/royalApi";
import { PlayerInfo } from "./PlayerClash.typings";
import { isEmpty } from "lodash";
import { Jumbotron } from "reactstrap";

export interface PlayerProps {
  playerInfo: PlayerInfo;
}



export class PlayerClash extends React.Component <PlayerProps> {
  private myId: string = "9GU0880R";
  public state: { playerInfo: PlayerInfo } = {
    playerInfo: {}
  };
  constructor(props) {
    super(props);
    console.log(props);
    // fetchPlayerInfo("player", this.myId).subscribe(
    //   (playerInfo: PlayerInfo) => {
    //     this.setState({ playerInfo });
    //   },
    //   e => {
    //     toast.error(e.toString());
    //   }
    // );
  }

  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">
          Hello, {this.state.playerInfo.name} of clan{" "}
          {this.state.playerInfo.clanName}!
        </h1>
        {/* <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typgraphy and spacing to space content out
          within the larger container.
        </p> */}
      </Jumbotron>
    );
  }
}
