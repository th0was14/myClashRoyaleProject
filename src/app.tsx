import * as React from "react";
import * as ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Layout } from "./components/layout/Layout";
import { appState } from "./containers/reducers/app.reducers";
import mySaga from './containers/sagas/saga';
// @flow

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
