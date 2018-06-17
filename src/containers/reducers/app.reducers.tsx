import { combineReducers } from "redux";
import { playerReducers } from "./player.reducers";
import { PlayerInfo } from "../../components/page/PlayerClash.typings";

export interface PlayerState {
  playerInfo: PlayerInfo;
  isFetching: boolean;
  errorMessage: string;
}

export interface RoyalState {
  player: PlayerState;
}

export const appState = combineReducers({ player: playerReducers });
