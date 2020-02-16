import * as React from "react";
import {Badge} from "reactstrap";

export interface Props {
  level: number;
  icon: string;
}

export const CardClash: React.FC<Props> = ({ level, icon }) => (
  <div>
    <Badge color="secondary">{level}</Badge>
    <img src={icon} height="65" />
  </div>
);
