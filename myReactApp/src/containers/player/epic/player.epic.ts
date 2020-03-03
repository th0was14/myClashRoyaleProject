import { from } from "rxjs";
import { fetchPlayerInfo } from "api/service/royalApi/royal.api";
import { coreEpic } from "utils/epic.utils";
import { playerFetchAction } from "containers/player/typings";

export const playerEpic = actions$ =>
  coreEpic(actions$, playerFetchAction, payload => from(fetchPlayerInfo("players", payload)));
