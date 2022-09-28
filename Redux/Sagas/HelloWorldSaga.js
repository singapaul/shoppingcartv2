import {put, takeEvery, all, call} from 'redux-saga/effects';
import {DEV_COUNT, DEV_COUNT_ASYNC, FETCH_DEMO, BEERS_LIST} from '../constants';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {}

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

const APIFETCHYFECH = async () => {
  console.log('fetch requested');
  try {
    // fetch is working with local server but not with https server
    const response = await fetch('http://localhost:4000/stocklist');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('we hit error');
    return error;
  }
};

const APIFETCHYFECH2 = async () => {
  console.log('fetch requested');
  try {
    // fetch is working with local server but not with https server
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    console.log(data);
    // return data;
  } catch (error) {
    console.log('we hit error');
    // return error;
  }
};

// writing the fetch request function

function* fetchAPIAttempt() {
  try {
    const posts2 = yield call(APIFETCHYFECH2);
    const posts = yield call(APIFETCHYFECH);
    console.log(posts[0]);
    yield put({type: BEERS_LIST, payload: posts});
  } catch (error) {
    yield put({type: BEERS_LIST, payload: 'a huge error'});
  }
}

function* watchfetchAPIAttempt() {
  yield takeEvery(FETCH_DEMO, fetchAPIAttempt);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchfetchAPIAttempt()]);
}
