import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from './../components/HomeHeader'
import { WebView } from 'react-native-webview';

export default AboutScreen = ({ navigation }) => {

  return (
      <SafeAreaView style={styles.container}>
        <HomeHeader />
        <View style={styles.contentContainer}>
          <WebView
            source={{ uri: 'https://sun.edu.ng/about/' }}
            style={{ paddingTop: 0 }}
          />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
  },
  titleBar: {
    backgroundColor: '#eee',
    paddingTop: 0,
    paddingLeft: 18,
    paddingBottom: 5
  }
});
