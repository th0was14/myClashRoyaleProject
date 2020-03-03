import { ActionsObservable } from "redux-observable";
import { Action } from "redux";
import { AsyncActionCreators } from "typescript-fsa";
import { Observable, of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { isEmpty, noop } from "lodash";

export const coreEpic = <P, T, D, F extends string | string[]>(
  action$: ActionsObservable<Action>,
  action: AsyncActionCreators<P, D | T, F>,
  callHttp: (payload: P, headers?: any) => Observable<T>,
  mapper: (dto: T, payload?: P) => D = null,
  toastMessage = ""
): Observable<Action> => {
  return action$.pipe(
    filter(action.started.match),
    switchMap(({ meta, payload }) =>
      callHttp(payload).pipe(
        tap(() =>
          !isEmpty(toastMessage) ? console.log(toastMessage) : noop()
        ),
        map(result =>
          action.done({
            params: payload,
            result: mapper ? mapper(result, payload) : result
          })
        ),
        catchError(e =>
          of(
            action.failed({
              error: e?.message ?? e.toString(),
              params: payload
            })
          )
        )
      )
    )
  );
};