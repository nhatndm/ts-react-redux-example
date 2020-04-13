import { takeEvery, put } from 'redux-saga/effects';
import { PostTypes } from './types';
import { PostService } from '../../Services/posts.api';
import { FetchPostsSuccess, FetchPostFailure } from './action';

async function handleFetchPostAPI() {
  try {
    const res = await PostService.fetchPosts();
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
}

function* handleFetchPostSaga() {
  try {
    const data = yield handleFetchPostAPI();
    yield put(FetchPostsSuccess(data));
  } catch (error) {
    yield put(FetchPostFailure(error));
  }
}

export function* fetchposts() {
  yield takeEvery(PostTypes.FETCH_POSTS_REQUEST, handleFetchPostSaga);
}
