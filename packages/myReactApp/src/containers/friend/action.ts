import { actionCreatorFactory } from "typescript-fsa";
import { ClashFriend } from "api/service/jsonServer/typings";

const actionFriendCreator = actionCreatorFactory("FRIEND");

export const friendFetchAction = actionFriendCreator.async<
    string,
    ClashFriend[],
    string
    >("FETCH");