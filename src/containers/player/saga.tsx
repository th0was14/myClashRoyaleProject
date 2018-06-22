import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { playerFetchActions } from "./typings";
import { fetchPlayerInfo, fetchPlayerChest } from "../../service/royalApi";

function* fetchUser(action) {
  try {
    const playerInfo = yield call(fetchPlayerInfo, "player", action.playerId);
    yield put({
      type: playerFetchActions.PLAYER_FETCH_SUCCEEDED,
      payload: playerInfo
    });
  } catch (e) {
    yield put({
      type: playerFetchActions.PLAYER_FETCH_FAILED,
      payload: { message: e.message }
    });
  }
}

function* fetchChest(action) {
  try {
    const playerChest = yield call(fetchPlayerChest, "player", action.playerId);
    yield put({
      type: playerFetchActions.CHEST_FETCH_SUCCEEDED,
      payload: playerChest
    });
  } catch (e) {
    yield put({
      type: playerFetchActions.PLAYER_FETCH_FAILED,
      payload: { message: e.message }
    });
  }
}


function* mySaga() {
  yield takeEvery(playerFetchActions.PLAYER_FETCH_REQUESTED, fetchUser);
  yield takeEvery(playerFetchActions.CHEST_FETCH_REQUESTED, fetchChest);
}

export default mySaga;
