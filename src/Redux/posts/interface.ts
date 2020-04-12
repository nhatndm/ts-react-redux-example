import { Post } from './model';
import { PostTypes } from './types';
import { BaseAction } from '../base/action.base';
import { Error } from '../base/base.type';

export interface PostState {
  readonly post: Post;
  readonly posts: Post[];
  readonly error: Error;
}

export interface PostAction extends BaseAction<PostTypes, PostState> {}

export interface PostRequest extends Pick<PostAction, 'type'> {}

export interface PostsSucess extends Pick<PostAction, 'posts' | 'type'> {}

export interface PostDetailSucess extends Pick<PostAction, 'post' | 'type'> {}

export interface PostFailure extends Pick<PostAction, 'error' | 'type'> {}
