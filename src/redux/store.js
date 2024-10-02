// src/redux/store.js
import { createStore } from 'redux';
import counterReducer from './counterSlice';

// Create the Redux store and pass the reducer
const store = createStore(counterReducer);

export default store;

