import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import HomeHeader from '../components/HomeHeader';

export default TourScreen = () => {
  return (
    <SafeAreaView>
      <HomeHeader />
      <WebView
        source={{ uri: 'https://www.360human.com.ng/tour/skyline-university-entrance-reception-car-park-library-marketing-area-computer-labs-ssd/skinned/' }}
        style={{ paddingTop: 0 }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  titleBar: {
    backgroundColor: '#eee',
    paddingTop: 0,
    paddingLeft: 18,
    paddingBottom: 5
  }

});
