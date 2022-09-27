import {combineReducers} from 'redux';
import {cartData, countingDemo, productsFetchList} from './cartReducer';

export default combineReducers({
  cartData,
  countingDemo,
  productsFetchList,
});
