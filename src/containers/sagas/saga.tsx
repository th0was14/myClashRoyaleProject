import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { playerFetchActions } from "../actions/typings";
import { fetchPlayerInfo } from "../../service/royalApi";

function* fetchUser(action) {
  try {
    const user = yield call(fetchPlayerInfo, "player", action.playerId);
    yield put({ type: playerFetchActions.PLAYER_FETCH_SUCCEEDED, user: user });
  } catch (e) {
    yield put({
      type: playerFetchActions.PLAYER_FETCH_FAILED,
      message: e.message
    });
  }
}

function* mySaga() {
  yield takeEvery(playerFetchActions.PLAYER_FETCH_REQUESTED, fetchUser);
}

export default mySaga;
