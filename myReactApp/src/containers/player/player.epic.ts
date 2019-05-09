import { catchError, filter, map, switchMap } from "rxjs/operators";
import { playerFetchAction } from "./typings";
import { from, of } from "rxjs";
import { fetchPlayerInfo } from "../../service/royalApi";

export const playerEpic = actions$ => {
  return actions$.pipe(
    filter(playerFetchAction.started.match),
    switchMap((action: any) =>
      from(fetchPlayerInfo("player", action.payload)).pipe(
        map(p => playerFetchAction.done({ result: p, params: action.payload })),
        catchError(() =>
          of(
            playerFetchAction.failed({
              error: "something wrong",
              params: action.payload
            })
          )
        )
      )
    )
  );
};
