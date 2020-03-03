import { combineEpics } from "redux-observable";
import { playerEpic } from "containers/player/epic/player.epic";
import { chestEpic } from "containers/player/epic/chest.epic";

export const epics = combineEpics(playerEpic, chestEpic);
