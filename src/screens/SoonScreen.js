import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button
} from 'react-native';

export default SoonScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/images/underconstruction.png')} style={{ width: 120, height: 100 }} />
      </View>
      <Text style={styles.text1}>
        Page under construction
        </Text>
      <Text style={styles.text2}>
        Coming Soon..
        </Text>
      <Button
        title="Go back to Home"
        buttonStyle={styles.backButton}
        onPress={() => navigation.navigate('Home')} />
    </View>
  );
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
