import * as React from "react";

export interface Props {
  level: number;
  icon: string;
}

export const CardClash: React.FC<Props> = ({ level, icon }) => (
  <div>
    <span>{level}</span>
    <img src={icon} height="65" />
  </div>
);
