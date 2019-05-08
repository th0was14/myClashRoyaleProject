import { actionCreatorFactory } from "typescript-fsa";
import { PlayerChest, PlayerInfo } from "../../components/PlayerClash.typings";

const actionCreator = actionCreatorFactory();

export const playerFetchAction = actionCreator.async<
  string,
  PlayerInfo,
  string
>("PLAYER_FETCH");
export const chestFetchAction = actionCreator.async<
  string,
  PlayerChest,
  string
>("CHEST_FETCH");
