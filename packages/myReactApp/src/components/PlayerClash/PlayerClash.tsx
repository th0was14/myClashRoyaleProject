import React from "react";
import { Jumbotron } from "reactstrap";
import { Card, Chest } from "components/PlayerClash/PlayerClash.typings";
import { map } from "lodash";
import { CardClash } from "components/PlayerClash/Card/CardClash";
import ChestList from "components/PlayerClash/Chest/ChestList";

export interface PlayerProps {
  clanName: string;
  currentDeck: Card[];
  upcomingChests: Chest[];
}

const PlayerClash: React.FC<PlayerProps> = ({clanName, currentDeck, upcomingChests}) => {
  return (
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
};

export default PlayerClash;
