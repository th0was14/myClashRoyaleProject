import { from } from "rxjs";
import { fetchPlayerChest } from "api/service/royalApi/royal.api";
import { coreEpic } from "utils/epic.utils";
import { chestFetchAction } from "containers/player/action";

export const chestEpic = actions$ =>
  coreEpic(actions$, chestFetchAction, payload => from(fetchPlayerChest("players", payload)));
