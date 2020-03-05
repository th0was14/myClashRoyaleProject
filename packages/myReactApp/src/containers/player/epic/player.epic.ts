import { from, Observable } from "rxjs";
import { fetchPlayerInfo } from "api/service/royalApi/royal.api";
import { coreEpic } from "utils/epic.utils";
import { chestFetchAction, playerFetchAction } from "containers/player/action";
import { Action } from "redux";
import { filter, map } from "rxjs/operators";
import { ActionsObservable } from "redux-observable";

export const playerEpic = (actions$: ActionsObservable<Action>): Observable<Action> =>
  coreEpic(actions$, playerFetchAction, payload => from(fetchPlayerInfo("players", payload)));

export const onPlayerDoneEpic = (actions$: ActionsObservable<Action>): Observable<Action> =>
  actions$.pipe(
    filter(playerFetchAction.done.match),
    map(action => chestFetchAction.started(action.payload.params))
  );
