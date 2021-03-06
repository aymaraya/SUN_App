import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { LinearGradient } from 'expo-linear-gradient';

const Menu = ({ color1, color2, iconSrc, text, to }) => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(to)}>
        <LinearGradient
          colors={[color1, color2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bg}>
          <Image
            source={iconSrc}
            style={styles.menuIcon}
            resizeMode='contain'
          />
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
    flex: 1,
    margin: 6,
  },
  text: {
    color: 'white',
    textAlign: 'right',
    marginTop: 8
  },
  bg: {
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center',
  },
  menuIcon: {
    height: 120,
    width: 120
  }
});

export default Menu;