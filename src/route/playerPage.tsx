import React from "react";
import PlayerContainer from "../containers/player/player.container";

export interface PlayerPageProps {
  name?: string;
}

export class PlayerPage extends React.Component<PlayerPageProps> {
  constructor(props: PlayerPageProps) {
    super(props);
  }

  render() {
    return <PlayerContainer />;
  }
}
