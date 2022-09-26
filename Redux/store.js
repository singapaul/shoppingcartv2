import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Reducers/rootReducer';
// import productSaga from './productSaga';
import createSagaMiddleware from '@redux-saga/core';

// middleware is a callback function with an array as it can take multiple values

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

// sagaMiddleware.run(productSaga);
export default store;
