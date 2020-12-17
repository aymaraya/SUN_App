import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { LinearGradient } from 'expo-linear-gradient';

const LogoutButton = ({color1, color2, iconSrc, text, onPress, navigation, to}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(to)}>
        <LinearGradient
          colors={[color1, color2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bg}>
          
          <Text style={styles.text}>
            {text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    width: '40%',
    height: '16%',
    margin: 8
  },
  menuIcon: {
    height: '80%',
    width: '60%'
  },
  text: { 
    color: 'white', 
    textAlign: 'center',
    marginTop: 8 
  },
  bg: {
    borderRadius: 8, 
    padding: 15,
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
  }
});

export default withNavigation(LogoutButton);