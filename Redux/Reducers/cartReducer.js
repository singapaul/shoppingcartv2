import {ADD_TO_CART, DEV_COUNT} from '../constants';

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
      return data + action.payload;
    default:
      return data;
  }
};
