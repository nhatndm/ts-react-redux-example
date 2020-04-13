// POSTS
import { PostState } from './posts/interface';

// HISTORY + ROUTER
import { RouterState } from 'connected-react-router';

export interface ApplicationState {
  readonly posts: PostState;
  readonly router: RouterState;
}
