import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

export default CurrentSemester = () => {

  return (
    <View style={styles.container}>
      <Text> Current Semester </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5
  }
})