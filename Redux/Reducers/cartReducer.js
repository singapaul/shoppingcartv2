import {ADD_TO_CART, DEV_COUNT, BEERS_LIST} from '../constants';

export const cartData = (data = ['HELLO JEFF'], action) => {
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

export const productsFetchList = (data = ['no beers yet'], action) => {
  switch (action.type) {
    case BEERS_LIST:
      return action.payload;
    default:
      return data;
  }
};
