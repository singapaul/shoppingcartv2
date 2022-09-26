import {ADD_TO_CART, DEV_COUNT} from '../constants';

export const addToCart = data => {
  console.warn('action called', data);
  return {type: ADD_TO_CART, data};
};

export const developmentCounter = data => {
  console.warn('action called', data);
  console.log(data);
  return {type: DEV_COUNT, payload: data};
};
