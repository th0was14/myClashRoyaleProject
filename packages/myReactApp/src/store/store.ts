import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import { appState } from "store/reducers";
import { epics } from "store/epics";

const logger = createLogger({
  collapsed: true
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(appState, applyMiddleware(epicMiddleware, logger));

epicMiddleware.run(epics);

export default store;
