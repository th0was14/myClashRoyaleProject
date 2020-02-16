import * as React from "react";
import { Chest } from "./PlayerClash.typings";
import { Badge } from "reactstrap";

export interface Props {
  chest: Chest;
}

const ChestComp: React.FC<Props> = ({ chest }) => (
  <span className="mr-3">
    <Badge color="primary">{chest.position}</Badge>
    <img className="img-responsive" src={chest.src} height="40" />
  </span>
);

export default ChestComp;
