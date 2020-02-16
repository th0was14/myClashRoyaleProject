import * as React from "react";
import { Chest } from "./PlayerClash.typings";
import ChestComp from "./ChestComp";
import { map } from "lodash";

export interface Props {
  title: string;
  chests: Chest[];
}

const ChestList: React.FC<Props> = ({ title, chests }) => (
  <div className="row col-12 py-2 align-items-baseline">
    <span className="mr-2">{title}</span>
    <div>{chests && map(chests, chest => <ChestComp chest={chest} />)}</div>
  </div>
);

export default ChestList;
