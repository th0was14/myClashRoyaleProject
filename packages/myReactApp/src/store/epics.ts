import { combineEpics } from "redux-observable";
import { onPlayerDoneEpic, playerEpic } from "containers/player/epic/player.epic";
import { chestEpic } from "containers/player/epic/chest.epic";
import { friendEpic } from "containers/friend/friend.epic";

export const epics = combineEpics(playerEpic, onPlayerDoneEpic, chestEpic, friendEpic);
