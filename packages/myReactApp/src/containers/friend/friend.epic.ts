import { from } from "rxjs";
import { coreEpic } from "utils/epic.utils";
import { fetchFriends } from "api/service/jsonServer";
import { friendFetchAction } from "containers/friend/action";

export const friendEpic = actions$ =>
  coreEpic(
    actions$,
      friendFetchAction,
    () => from(fetchFriends()),
    ({friends}) => friends,
  );
