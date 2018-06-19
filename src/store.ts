import mySaga from "./containers/player/saga";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { appState } from "./containers/app/app.reducers";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appState, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(mySaga);

export default store;
