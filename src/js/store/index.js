// src/js/store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import { forbiddenWordsMiddleware } from "../middlewares";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MS_CLUBS_STATE = 'MS_CLUBS_STATE';

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(MS_CLUBS_STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(MS_CLUBS_STATE, serializedState);
  } catch (err) {
    console.log('Error saving data');
  }
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  storeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
