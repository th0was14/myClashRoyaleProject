import { combineReducers } from "redux";
import { playerReducers } from "./player.reducers";

export interface royalState {
  user: string;
  isFetching: boolean;
  errorMessage: string;
}

export const appState = combineReducers({ playerReducers });
