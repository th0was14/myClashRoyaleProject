import { ActionsObservable } from "redux-observable";
import { Action } from "redux";
import { AsyncActionCreators } from "typescript-fsa";
import { Observable, of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { isEmpty, noop } from "lodash";
import { toast } from "react-toastify";

const toastSuccess = (content: string) => {
    toast(content, {type: "success", hideProgressBar: true, delay: 1000})
};

const toastError = (content: string) => {
    toast(content, {type: "error", hideProgressBar: true, delay: 1000})
};

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
          !isEmpty(toastMessage) ? toastSuccess(toastMessage) : noop()
        ),
        map(result =>
          action.done({
            params: payload,
            result: mapper ? mapper(result, payload) : result
          })
        ),
        catchError(e => {
            const messageError = e?.message ?? e.toString();
            toastError(messageError);
                return of(
                    action.failed({
                        error: messageError,
                        params: payload
                    })
                );
            }
        )
      )
    )
  );
};