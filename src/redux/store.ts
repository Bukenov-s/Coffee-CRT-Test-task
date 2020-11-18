import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import root_saga from './root.saga';
import root_reducer from './root.reducer';

const initial_state = {};
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const store = createStore(
  root_reducer,
  initial_state,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(root_saga);

export { store };
