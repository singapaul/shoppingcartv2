import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Reducers/rootReducer';
import rootSaga from './Sagas/HelloWorldSaga';
import createSagaMiddleware from '@redux-saga/core';

// middleware is a callback function with an array as it can take multiple values

let middlewareArray = [];

const sagaMiddleware = createSagaMiddleware();

middlewareArray.push(sagaMiddleware);

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewareArray.push(createFlipperDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: () => middlewareArray,
});

sagaMiddleware.run(rootSaga);
export default store;
