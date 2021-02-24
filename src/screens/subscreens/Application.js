import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

import { WebView } from 'react-native-webview';

const ActivityIndicatorComponent = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator
        color="#009688"
        size="large"
      />
      <Text style={{ textAlign: 'center' }}> Loading Webview </Text>
    </View>
  );
}


export default Procedure = () => {
  const [visible, setVisible] = useState(true)

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://oas.sun.edu.ng/applyonline?_ga=2.214213588.27085881.1562863639-928937381.1559338983' }}
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        onError={() => alert('Something went wrong')}
        onLoad={() => setVisible(false)}
      />
      {visible ? <ActivityIndicatorComponent /> : null} 

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
})