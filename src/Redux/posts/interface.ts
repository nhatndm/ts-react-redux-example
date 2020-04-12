import { Post } from './model';
import { PostTypes } from './types';
import { BaseAction } from '../base/action.base';

export interface PostState {
  readonly post: Post;
  readonly posts: Post[];
  readonly error: string;
}

export interface PostAction extends BaseAction<PostTypes> {}
