import { combineReducers } from "redux";
import { PlayerChest, PlayerInfo } from "components/PlayerClash/PlayerClash.typings";
import { royalReducers } from "containers/player/reducer/player.reducers";

export interface PlayerState {
  playerInfo: PlayerInfo;
  playerChest: PlayerChest;
  isFetching: boolean;
  errorMessage: string;
}

export interface RoyalState {
  player: PlayerState;
}

export const appState = combineReducers<RoyalState>({ player: royalReducers });
