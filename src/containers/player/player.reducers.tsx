import { PlayerState } from "../app/app.reducers";
import { playerFetchActions } from "./typings";

const initialState: PlayerState = {
  playerInfo: {},
  playerChest: { chests: [] },
  isFetching: false,
  errorMessage: ""
};

export const playerReducers = (
  state: PlayerState = initialState,
  action: any
): PlayerState => {
  switch (action.type) {
    case playerFetchActions.PLAYER_FETCH_SUCCEEDED: {
      return { ...state, playerInfo: action.payload, isFetching: false };
    }
    case playerFetchActions.CHEST_FETCH_SUCCEEDED: {
      return { ...state, playerChest: action.payload, isFetching: false };
    }
    case playerFetchActions.CHEST_FETCH_REQUESTED:
    case playerFetchActions.PLAYER_FETCH_REQUESTED: {
      return { ...state, isFetching: true };
    }
    case playerFetchActions.PLAYER_FETCH_FAILED: {
      return {
        ...state,
        errorMessage: action.payload.message,
        isFetching: false
      };
    }
    default:
      return state;
  }
};
