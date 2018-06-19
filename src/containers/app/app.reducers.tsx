import { combineReducers } from "redux";
import { playerReducers } from "../player/player.reducers";
import { PlayerInfo } from "../../components/PlayerClash.typings";

export interface PlayerState {
  playerInfo: PlayerInfo;
  isFetching: boolean;
  errorMessage: string;
}

export interface RoyalState {
  player: PlayerState;
}

export const appState = combineReducers<RoyalState>({ player: playerReducers });
