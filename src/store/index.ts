import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers/index";
import thunk from "redux-thunk";
import { rootSaga } from "./sagas/rootSaga";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducer>;
