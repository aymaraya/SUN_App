import React from 'react';
import App from './App.js';
import { registerRootComponent } from 'expo';

import { Provider } from 'react-redux';
import store from './store'

const NewRootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
export default registerRootComponent(NewRootComponent);