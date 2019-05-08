import { createStore, applyMiddleware } from "redux";
import { appState } from "./containers/app/app.reducers";
import { createLogger } from "redux-logger";

import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./containers/rootEpic";

const logger = createLogger({
  collapsed: true
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(appState, applyMiddleware(epicMiddleware, logger));

epicMiddleware.run(rootEpic);

export default store;
