// POSTS
import { PostState } from './post/post.state';

// HISTORY + ROUTER
import { RouterState } from 'connected-react-router';

export interface ApplicationState {
  readonly posts: PostState;
  readonly router: RouterState;
}
