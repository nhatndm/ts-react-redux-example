import { combineReducers } from 'redux';

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
