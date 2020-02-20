import { catchError, filter, map, switchMap } from "rxjs/operators";
import { chestFetchAction } from "../typings";
import { from, of } from "rxjs";
import { fetchPlayerChest } from "api/service/royalApi";

export const chestEpic = actions$ => {
  return actions$.pipe(
    filter(chestFetchAction.started.match),
    switchMap((action: any) =>
      from(fetchPlayerChest("player", action.payload)).pipe(
        map(p => chestFetchAction.done({ result: p, params: action.payload })),
        catchError(() =>
          of(
            chestFetchAction.failed({
              error: "something wrong",
              params: action.payload
            })
          )
        )
      )
    )
  );
};
