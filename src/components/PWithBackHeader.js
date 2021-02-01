import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements';

const PWithBackHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name='arrow-back'
        color='#007AFF'
        size={28}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}> {props.title} </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  text: {
    fontSize: 32, 
    marginLeft: 4,
    fontFamily: 'Roboto_bold'
  },

});

export default PWithBackHeader;