import {put, takeEvery, all} from 'redux-saga/effects';
import {DEV_COUNT, DEV_COUNT_ASYNC} from '../constants';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* incrementAsync(data) {
  yield console.log('Increment Async called in the saga!');
  yield delay(2000);
  yield console.log(
    'Increment Async called in the saga after a 2 second break!!',
  );
  yield console.log(data);
  yield put({type: DEV_COUNT, payload: data.payload});
}

function* watchIncrementAsync() {
  yield takeEvery(DEV_COUNT_ASYNC, incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
