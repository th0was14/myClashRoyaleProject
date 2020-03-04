import { isType } from "typescript-fsa";
import reduceReducers from "reduce-reducers";
import { Action } from "redux";
import { friendFetchAction } from "containers/friend/action";
import { FriendState } from "store/typings";

const initialState: FriendState = {
  friends: [],
  isFetching: false,
  error: ""
};

const friendReducers = (state: FriendState = initialState, action: Action): FriendState => {
  if (isType(action, friendFetchAction.started)) {
    return { ...state, isFetching: true };
  }
  if (isType(action, friendFetchAction.done)) {
    return { ...state, friends: action.payload.result, isFetching: false };
  }
  if (isType(action, friendFetchAction.failed)) {
    return {
      ...state,
      error: action.payload.error,
      isFetching: false
    };
  }
  return state;
};

export const friendsReducers = reduceReducers<FriendState>(initialState, friendReducers);
