import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

export default Procedure = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>
        <View style={styles.picContainer}>

        </View>
        <View style={styles.detailsContainer}>
          <Text>
            International day
             </Text>
          <Text>
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
    flex: 1,
    flexDirection: 'row'
  },

  picContainer: {
    flex: 1,
    height: 100,
    backgroundColor: 'grey',
    marginRight: 5
  },

  detailsContainer: {
    flex: 3,
    height: 100,
    backgroundColor: 'grey'
  }
})