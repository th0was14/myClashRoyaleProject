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
    const { name, clanName, currentDeck } = this.props.playerInfo;
    const { chests } = this.props.playerChest;
    let element: JSX.Element;
    if (this.props.isFetching) {
      element = <span>Loading ...</span>;
    } else if (this.props.inError) {
      element = <Alert color="danger">{this.props.errorMessage}</Alert>;
    } else {
      const spanStyle = {
        height: "50px"
      };
      element = (
        <div className="container">
          <div className="row">
            <Jumbotron className="col">
              <h1 className="display-3">
                Hello, {name} {clanName ? "of clan " + clanName : ""}!
              </h1>
              this is your next chest --->
              {chests.map((chest, index) => (
                <span style={spanStyle} key={index}>
                  {index + 1} :{" "}
                  <img className="img-responsive" src={chest.src} height="40" />
                </span>
              ))}
            </Jumbotron>
          </div>
          <div className="row">
            <div className="row">
              {currentDeck
                ? currentDeck.map(card => (
                    <div>
                      <span key={card.id}>{card.level}</span>
                      <img src={card.icon} height="65" />
                    </div>
                  ))
                : ""}
            </div>
            <div className="row" />
          </div>
        </div>
      );
    }
    return element;
  }
}
