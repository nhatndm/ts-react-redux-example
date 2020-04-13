import { map } from 'lodash';
import { all, fork } from 'redux-saga/effects';

import * as postSaga from './posts/saga';

export default function* rootSaga() {
  yield all(map(postSaga, (item) => fork(item)));
}
