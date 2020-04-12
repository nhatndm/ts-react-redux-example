import { Store, createStore, applyMiddleware } from 'redux';

// SAGA Middleware
import createSagaMiddleware from 'redux-saga';

// Connected Router Middlerware
import { routerMiddleware } from 'connected-react-router';

// AppReducer, AppState
import { createRootReducer, rootSaga } from './app.reducer';
import { ApplicationState } from './app.interface';

// LOGGER
import logger from 'redux-logger';

// HISTORY
import { History } from 'history';

const initState = {};

export default function configureStore(
  history: History
): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    initState,
    applyMiddleware(routerMiddleware(history), logger, sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
