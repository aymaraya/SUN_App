import React, { useEffect, useState } from 'react'
import App from './App.js';
import { registerRootComponent } from 'expo';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import { Provider } from 'react-redux';
import store from './store'

const NewRootComponent = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFonts = async() => {
    await Font.loadAsync({
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto_bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto_regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
    setFontLoaded(true)
  }
  
  loadFonts()

  if (!fontLoaded) {
    return null
  } else {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
export default registerRootComponent(NewRootComponent);