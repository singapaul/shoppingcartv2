import {
  ADD_TO_CART,
  DEV_COUNT,
  DEV_COUNT_ASYNC,
  SET_PRODUCT_LIST,
} from '../constants';

export const cartData = (data = ['HELLO MOTHER FUCKERS'], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    default:
      return data;
  }
};

export const countingDemo = (data = 69, action) => {
  switch (action.type) {
    case DEV_COUNT:
      console.warn('The payload is' + action.payload);
      return data + action.payload;
    default:
      return data;
  }
};

export const productsFetchList = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [...action.data];
    default:
      return data;
  }
};
