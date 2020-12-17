import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { WebView } from 'react-native-webview';

export default Procedure = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://oas.sun.edu.ng/applyonline?_ga=2.214213588.27085881.1562863639-928937381.1559338983' }}
        style={{ paddingTop: 0 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})