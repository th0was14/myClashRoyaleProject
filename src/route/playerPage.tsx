import React from "react";
import PlayerContainer from "../containers/player/player.container";

export class PlayerPage extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { playerId } = this.props.match.params;
    return <PlayerContainer playerId={playerId} />;
  }
}
