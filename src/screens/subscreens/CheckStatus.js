import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default CheckStatus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        Your Application has been
        received and an application
        advisor will contact you shortly
        Application reference number: 128870
        </Text>
      <TouchableOpacity style={styles.applyButton} onPress={handleLoginPress}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Back </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold'
  },
  applyButton: {
    backgroundColor: '#d44045',
    width: 300,
    marginTop: 15,
    borderRadius: 6,
    paddingVertical: 10
  },
  backButton: {
    marginTop: 10
  }
})
