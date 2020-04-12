import { Reducer } from 'redux';
import { PostTypes } from './types';
import { PostAction, PostState } from './interface';

const initState: PostState = {
  post: {},
  posts: [],
  error: '',
};

const PostReducer: Reducer<PostState, PostAction> = (
  state = initState,
  action: PostAction
) => {
  switch (action.type) {
    case PostTypes.FETCH_POSTS_SUCCESS: {
      return { ...state, posts: action.posts };
    }

    case PostTypes.FETCH_POSTS_FAILURE: {
      return { ...state, error: action.error };
    }

    default: {
      return { ...state };
    }
  }
};

export { PostReducer };
