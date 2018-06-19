import { PlayerState } from "../app/app.reducers";
import { playerFetchActions } from "./typings";

const initialState: PlayerState = {
  playerInfo: {},
  isFetching: false,
  errorMessage: ""
};

export const playerReducers = (
  state: PlayerState = initialState,
  action: any
): PlayerState => {
  switch (action.type) {
    case playerFetchActions.PLAYER_FETCH_SUCCEEDED: {
      console.log("player reducer", state, action);
      return { ...state, playerInfo: action.payload, isFetching: false };
    }
    case playerFetchActions.PLAYER_FETCH_REQUESTED: {
      console.log("player reducer", state, action);
      return { ...state, isFetching: true };
    }
    case playerFetchActions.PLAYER_FETCH_FAILED: {
      return { ...state, errorMessage: action.payload.message, isFetching: false };
    }
    default:
      return state;
  }
};
