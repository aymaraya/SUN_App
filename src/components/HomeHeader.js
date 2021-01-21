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
const HomeHeader = ({ Home }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name='chevron-left'
            color='#007AFF'
            size={28}
          />
          <Text style={{ color: '#007AFF' }}>
            Back
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },

  text: {
    color: 'white',
    textAlign: 'right',
    marginTop: 8
  },

});

export default HomeHeader;