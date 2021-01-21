import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { LinearGradient } from 'expo-linear-gradient';

const Menu = ({color1, color2, iconSrc, text,  to}) => {
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
    flexGrow: 1,
    flexShrink: 1,
    width: '40%',
    height: '23%',
    margin: 8
  },
  menuIcon: {
    height: '80%',
    width: '60%'
  },
  text: { 
    color: 'white', 
    textAlign: 'right',
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

export default Menu;