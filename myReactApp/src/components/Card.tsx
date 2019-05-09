import React, { Fragment } from "react";

export interface CardProps {
  id: string;
  level: number;
  icon: string;
}

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  public render() {
    return (
      <Fragment>
        <Card />
      </Fragment>
    );
  }
}
