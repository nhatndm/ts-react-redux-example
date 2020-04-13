import { PostTypes } from './post.actiontype';
import { PostState } from './post.state';
import { BaseAction } from '../base/base.action';

export interface PostAction extends BaseAction<PostTypes, PostState> {}

export interface PostRequest extends Pick<PostAction, 'type'> {}

export interface PostsSucess extends Pick<PostAction, 'posts' | 'type'> {}

export interface PostDetailSucess extends Pick<PostAction, 'post' | 'type'> {}

export interface PostFailure extends Pick<PostAction, 'error' | 'type'> {}
