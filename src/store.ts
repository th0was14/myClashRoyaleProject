import mySaga from "./containers/player/saga";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { appState } from "./containers/app/app.reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
