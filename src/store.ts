import mySaga from "./containers/sagas/saga";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { appState } from "./containers/reducers/app.reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
