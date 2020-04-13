import { Post } from './post.model';
import { BaseState } from '../base/base.state';

export interface PostState extends BaseState {
  readonly post: Post;
  readonly posts: Post[];
}
