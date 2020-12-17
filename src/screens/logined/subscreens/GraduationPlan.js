import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button
} from 'react-native';

export default class GraduationPlan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Graduation Plan
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: 120,
    height: 120
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15
  },
  text2: {
    fontSize: 18,
    margin: 10
  },
  backButton: {
    marginTop: 10
  }
});