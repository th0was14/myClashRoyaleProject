import React from "react";
import { Alert, Jumbotron } from "reactstrap";
import { PlayerInfo, PlayerChest, Card } from "./PlayerClash.typings";
import { map } from "lodash";
import { CardClash } from "./CardClash";
import ChestList from "./ChestList";

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
    const { fetchPlayerInfo, fetchPlayerChest } = this.props;
    fetchPlayerInfo();
    fetchPlayerChest();
  }

  render() {
    const { name, clanName, currentDeck } = this.props.playerInfo;
    const { upcomingChests, rareChests } = this.props.playerChest;
    let element: JSX.Element;
    if (this.props.isFetching) {
      element = <span>Loading ...</span>;
    } else if (this.props.inError) {
      element = <Alert color="danger">{this.props.errorMessage}</Alert>;
    } else {
      element = (
        <div className="container">
          <div className="row">
            <Jumbotron className="col">
              <h3>
                <span>{`Hello, ${name} ${clanName ? "of clan " + clanName : ""}!`}</span>
              </h3>
              <ChestList title="next chest => " chests={upcomingChests} />
              <ChestList title="rare chest =>" chests={rareChests} />

              <div className="row justify-content-between pt-3">
                {map(currentDeck, (card: Card) => (
                    <CardClash key={card.id} icon={card.icon} level={card.level} />
                ))}
                <div className="row" />
              </div>

            </Jumbotron>
          </div>
        </div>
      );
    }
    return element;
  }
}
