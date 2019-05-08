import { combineReducers } from "redux";
import { PlayerInfo, PlayerChest } from "../../components/PlayerClash.typings";
import { royalReducers } from "../player/player.reducers";

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
