import { chestFetchAction, playerFetchAction } from "../typings";
import { isType } from "typescript-fsa";
import reduceReducers from "reduce-reducers";
import { Action } from "redux";
import { PlayerState } from "store/reducers";

const initialState: PlayerState = {
  playerInfo: {},
  playerChest: { upcomingChests: [], rareChests: [] },
  isFetching: false,
  errorMessage: ""
};

const playerReducers = (
  state: PlayerState = initialState,
  action: Action
): PlayerState => {
  if (isType(action, playerFetchAction.started)) {
    return { ...state, isFetching: true };
  }
  if (isType(action, playerFetchAction.done)) {
    return { ...state, playerInfo: action.payload.result, isFetching: false };
  }
  if (isType(action, playerFetchAction.failed)) {
    return {
      ...state,
      errorMessage: action.payload.error,
      isFetching: false
    };
  }
  return state;
};

const chestReducers = (
  state: PlayerState = initialState,
  action: Action
): PlayerState => {
  if (isType(action, chestFetchAction.started)) {
    return { ...state, isFetching: true };
  }
  if (isType(action, chestFetchAction.done)) {
    return { ...state, playerChest: action.payload.result, isFetching: false };
  }
  if (isType(action, chestFetchAction.failed)) {
    return {
      ...state,
      errorMessage: action.payload.error,
      isFetching: false
    };
  }
  return state;
};

export const royalReducers = reduceReducers<PlayerState>(
  initialState,
  playerReducers,
  chestReducers
);
