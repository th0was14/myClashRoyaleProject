import React from "react";
import { Alert, Jumbotron } from "reactstrap";
import { Card, PlayerChest, PlayerInfo } from "components/PlayerClash/PlayerClash.typings";
import { map } from "lodash";
import { CardClash } from "components/PlayerClash/Card/CardClash";
import ChestList from "components/PlayerClash/Chest/ChestList";

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
    const { upcomingChests } = this.props.playerChest;
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
                <span className="border-bottom border-dark">{`Hello, ${name} ${
                  clanName ? "of clan " + clanName : ""
                }!`}</span>
              </h3>
              <ChestList title="next chest => " chests={upcomingChests} />

              <div className="row justify-content-between pt-3 flex-wrap">
                {map(currentDeck, (card: Card) => (
                  <CardClash
                    key={card.id}
                    icon={card.icon}
                    level={card.level}
                  />
                ))}
              </div>
            </Jumbotron>
          </div>
        </div>
      );
    }
    return element;
  }
}
