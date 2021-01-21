import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Container,
  Tab,
  Tabs
} from 'native-base';

import Procedure from './subscreens/Procedure';
import Requirements from './subscreens/Requirements';
import Application from './subscreens/Application';
import HomeHeader from '../components/HomeHeader';

export default AdmissionScreen = ({navigation}) => {
  return (
    <Container>
      <HomeHeader />
      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#007AFF' }}>
        <Tab heading="Procedures"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
          <Procedure />
        </Tab>

        <Tab heading="Requirements"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
          <Requirements />
        </Tab>

        <Tab heading="Application"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
          <Application />
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  titleBar: {
    backgroundColor: '#eee',
    paddingTop: 0,
    paddingLeft: 18,
    paddingBottom: 5
  }

});
