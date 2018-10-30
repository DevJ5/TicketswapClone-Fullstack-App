// src/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { storeJwt } from './middleware';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const enhancer = compose(
  applyMiddleware(ReduxThunk, storeJwt),
  devTools
);

const store = createStore(reducer, enhancer);

export default store;
