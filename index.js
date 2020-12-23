import React from 'react';
import App from './App.js';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';

import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

const userReducer = (state = {}, action) => {
  if (action.type === 'LOGIN_USER') {
    return (action.payload)
  }
  return state
}

const reducer = combineReducers({
  userReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

const NewRootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
export default registerRootComponent(NewRootComponent);

