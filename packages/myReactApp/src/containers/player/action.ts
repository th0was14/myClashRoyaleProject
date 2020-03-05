import { actionCreatorFactory } from "typescript-fsa";
import { PlayerChest, PlayerInfo } from "components/PlayerClash/PlayerClash.typings";

const actionPlayerCreator = actionCreatorFactory("PLAYER");
const actionChestCreator = actionCreatorFactory("CHEST");

export const playerFetchAction = actionPlayerCreator.async<
  string,
  PlayerInfo,
  string
>("FETCH");

export const chestFetchAction = actionChestCreator.async<
  string,
  PlayerChest,
  string
>("FETCH");
