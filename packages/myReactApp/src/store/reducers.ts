import { combineReducers } from "redux";
import { royalReducers } from "containers/player/reducer/player.reducers";
import { friendsReducers } from "containers/friend/friend.reducers";
import { RoyalState } from "store/typings";

export const appState = combineReducers<RoyalState>({ player: royalReducers, friend: friendsReducers });
