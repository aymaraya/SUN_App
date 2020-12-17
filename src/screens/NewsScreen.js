import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { WebView } from 'react-native-webview';
import {
  Container
} from 'native-base';
import HomeHeader from '../components/HomeHeader';

export default NewsScreen = ({navigation}) => {
  return (
    <Container>
      <HomeHeader />
      <WebView
        source={{ uri: 'https://sun.edu.ng/news/' }}
        style={{ paddingTop: 0 }}
      />

    </Container>
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
