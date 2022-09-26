import {combineReducers} from 'redux';
import {cartData, countingDemo} from './cartReducer';

export default combineReducers({
  cartData,
  countingDemo,
});
