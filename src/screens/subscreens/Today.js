import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image
} from 'react-native';

import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

export default Procedure = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>
        <View style={styles.picContainer}>
          <Image source={require('../../../assets/images/event1.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={{ fontWeight: 'bold' }}>
            Hackathon
             </Text>
          <Text style={{ fontSize: 13 }}>
            Lorem Ipsum Hai tum and coming to an event where is everyone there.
             </Text>
          <Text>
            LT-I, 9:10am
             </Text>
        </View>
      </View>
      <View style={styles.newsContainer}>
        <View style={styles.picContainer}>
          <Image source={require('../../../assets/images/event2.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={{ fontWeight: 'bold' }}>
            International day
             </Text>
          <Text style={{ fontSize: 13 }}>
            Lorem Ipsum Hai tum and coming to an event where is everyone there.
             </Text>
          <Text>
            Cafeteria, 9:10am
             </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },

  newsContainer: {
    flexDirection: 'row',
    paddingBottom: 15
  },

  picContainer: {
    flex: 2,
    height: 100,
    backgroundColor: '#eee',
    marginRight: 15
  },

  detailsContainer: {
    flex: 3,
    height: 100,
    justifyContent: 'space-around'
  }
})