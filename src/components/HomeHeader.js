import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
const HomeHeader = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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

export default withNavigation(HomeHeader);