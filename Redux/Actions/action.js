import {
  ADD_TO_CART,
  DEV_COUNT,
  PRODUCT_LIST,
  ASYNC_HELLO_WORLD,
  DEV_COUNT_ASYNC,
  FETCH_DEMO,
} from '../constants';

export const addToCart = data => {
  console.warn('action called', data);
  return {type: ADD_TO_CART, data};
};

export const developmentCounter = data => {
  console.warn('action called', data);
  return {type: DEV_COUNT, payload: data};
};

export const developmentCounterAsync = data => {
  return {type: DEV_COUNT_ASYNC, payload: data};
};

export const productsList = data => {
  return {type: PRODUCT_LIST, payload: data};
};

export const asyncHellowWorld = () => {
  return {type: ASYNC_HELLO_WORLD};
};

export const demoFetchAction = () => {
  return {type: FETCH_DEMO};
};
