import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';
import { rootSaga } from './sagas/rootSaga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
