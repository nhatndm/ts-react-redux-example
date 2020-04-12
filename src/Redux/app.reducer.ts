import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// POSTS
import { PostReducer } from './posts/reducer';

// HISTORY + ROUTER
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history: History) =>
  combineReducers({
    posts: PostReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([]);
}
