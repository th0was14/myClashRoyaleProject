import { combineEpics } from "redux-observable";
import { playerEpic } from "./player/player.epic";
import { chestEpic } from "./player/chest.epic";

export const rootEpic = combineEpics(playerEpic, chestEpic);
