import { PlayerChest, PlayerInfo } from "components/PlayerClash/PlayerClash.typings";
import { ClashFriend } from "api/service/jsonServer/typings";

export interface PlayerState {
    playerInfo: PlayerInfo;
    playerChest: PlayerChest;
    isFetching: boolean;
    errorMessage: string;
}

export interface FriendState {
    friends: ClashFriend[];
    isFetching: boolean;
    error: string;
}

export interface RoyalState {
    player: PlayerState;
    friend: FriendState;
}