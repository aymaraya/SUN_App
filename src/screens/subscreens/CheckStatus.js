import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Button } from 'react-native-elements'
export default CheckStatus = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        Your Application has been
        received and an application
        advisor will contact you shortly
        Application reference number: 128870
        </Text>
      <Button
        title="Go back to Login"
        buttonStyle={styles.backButton}
        onPress={() => navigation.navigate('Login')} />
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
  backButton: {
    marginTop: 10
  }
})
