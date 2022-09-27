import {takeEvery, put} from 'redux-saga/effects';
import {PRODUCT_LIST, SET_PRODUCT_LIST} from '../constants';

function* getProducts() {
  let result = 'LCD soundsystem is great';
  console.log('balls mate');
  result = yield result.json();
  yield put({type: SET_PRODUCT_LIST, data: result});
}

function* Saga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default Saga;
