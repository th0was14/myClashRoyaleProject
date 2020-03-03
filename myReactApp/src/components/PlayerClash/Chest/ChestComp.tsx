import * as React from "react";
import { Chest } from "components/PlayerClash/PlayerClash.typings";
import { Badge } from "reactstrap";

export interface Props {
  chest: Chest;
}

const ChestComp: React.FC<Props> = ({ chest }) => (
  <div className="mr-3">
    <Badge color="primary">{chest.position}</Badge>
    <img className="img-responsive" src={chest.src} height="40" />
  </div>
);

export default ChestComp;
