import {put, takeEvery, all, call} from 'redux-saga/effects';
import {DEV_COUNT, DEV_COUNT_ASYNC, FETCH_DEMO, BEERS_LIST} from '../constants';
import {fetchData} from '../API/api';

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

// writing the fetch request function

function* fetchAPIAttempt(action) {
  // I can write my fetch code
  // yield console.log('GET SOME BEERS');
  // const fetchData = 'BEEER BEERS JAMES LONG BEERS';
  // console.log(fetchFunction());
  // yield put({type: BEERS_LIST, payload: fetchData});

  console.log('API is getting fetched from');

  try {
    // Do API call
    const data = yield call(fetchData());
    yield put();
  } catch (error) {
    console.log('api call was unavailble');
    console.log(error);
  }
}

// const fetchFunction = async () => {
//   // try {
//   //   const res = await fetch('https://api.punkapi.com/v2/beers');
//   //   console.log('This line coming back' + res);
//   //   const data = await res.json();
//   //   console.log(data);
//   // } catch (error) {
//   //   console.log('this line is coming back as an ' + error);
//   // }
//   return [{beer: 'struass'}, {beer: 'heineken'}];
// };

function* watchfetchAPIAttempt() {
  yield takeEvery(FETCH_DEMO, fetchAPIAttempt);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchfetchAPIAttempt()]);
}
