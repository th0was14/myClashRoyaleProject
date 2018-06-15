import { royalState } from "./app.reducers";
import { playerFetchActions } from "../actions/typings";

export const playerReducers = (state: royalState, action: any): royalState => {
  switch (action.type) {
    case playerFetchActions.PLAYER_FETCH_SUCCEEDED: {
      return { ...state, user: action.payload };
    }
    case playerFetchActions.PLAYER_FETCH_REQUESTED: {
      return { ...state, isFetching: true };
    }
    case playerFetchActions.PLAYER_FETCH_FAILED: {
      return { ...state, errorMessage: action.payload, isFetching: false };
    }
    default:
      return state;
  }
};
