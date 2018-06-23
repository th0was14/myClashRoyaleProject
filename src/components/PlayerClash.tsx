import React from "react";
import { Alert, Jumbotron } from "reactstrap";
import { PlayerInfo, PlayerChest } from "./PlayerClash.typings";

export interface PlayerProps {
  playerInfo: PlayerInfo;
  playerChest: PlayerChest;
  isFetching: boolean;
  errorMessage: string;
  inError: boolean;
}
export interface PlayerDispatch {
  fetchPlayerInfo: () => void;
  fetchPlayerChest: () => void;
}

type IPlayer = PlayerProps & PlayerDispatch;

export class PlayerClash extends React.Component<IPlayer> {
  constructor(props: IPlayer) {
    super(props);
    this.props.fetchPlayerInfo();
    this.props.fetchPlayerChest();
  }

  render() {
    const { name, clanName } = this.props.playerInfo;
    const { chests } = this.props.playerChest;
    let element: JSX.Element;
    if (this.props.isFetching) {
      element = <span>Loading ...</span>;
    } else if (this.props.inError) {
      element = <Alert color="danger">{this.props.errorMessage}</Alert>;
    } else {
      element = (
        <Jumbotron>
          <h1 className="display-3">
            Hello, {name} {clanName ? "of clan " + clanName : ""}!
          </h1>
          this is your next chest --->
          {chests.map((chest, index) => (
            <div>
              <span>
                {index + 1} : {chest}
              </span>
              <br />
            </div>
          ))}
        </Jumbotron>
      );
    }
    return element;
  }
}
