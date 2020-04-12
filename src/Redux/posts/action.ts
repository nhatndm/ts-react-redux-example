import { PostTypes } from './types';
import {
  PostRequest,
  PostsSucess,
  PostFailure,
  PostDetailSucess,
} from './interface';
import { Error } from '../base/base.type';
import { Post } from './model';

// FETCH POSTS FLOW
export const FetchPostRequest = (): PostRequest => {
  return {
    type: PostTypes.FETCH_POSTS_REQUEST,
  };
};

export const FetchPostsSuccess = (posts: Post[]): PostsSucess => {
  return {
    type: PostTypes.FETCH_POSTS_SUCCESS,
    posts,
  };
};

export const FetchPostFailure = (error: Error): PostFailure => {
  return {
    type: PostTypes.FETCH_POSTS_FAILURE,
    error,
  };
};

// FETCH A PARTICULAR POST FLOW
export const FetchPostDetailRequest = (): PostRequest => {
  return {
    type: PostTypes.FETCH_POST_DETAIL_REQUEST,
  };
};

export const FetchPostDetailSuccess = (post: Post): PostDetailSucess => {
  return {
    type: PostTypes.FETCH_POST_DETAIL_SUCCESS,
    post,
  };
};

export const FetchPostDetailFailure = (error: Error): PostFailure => {
  return {
    type: PostTypes.FETCH_POST_DETAIL_FAILURE,
    error,
  };
};
