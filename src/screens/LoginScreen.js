import React, { Component, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  Image,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { loginUser } from './../../store';

import { Button } from 'react-native-elements';

const LoginScreen = (props) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (username == '' || password == '') {
      Alert.alert('Error', 'Please input your login details')
    }
    else {
      props.loginUser(username, password)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>


      <View style={{ marginTop: 10 }}>
        <Image
          source={require('./../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>

      <View style={{ flexDirection: 'column' }}>
        <Button title="Apply Now" buttonStyle={styles.applyButton}
          onPress={() => props.navigation.navigate('Admission')} />

      </View>

      <View>

        <View style={[styles.inputContainer, styles.loginInput]}>
          <TextInput
            style={{ height: 40, paddingLeft: 10 }}
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="username"
            enablesReturnKeyAutomatically={true}
            returnKeyType="next"
            textContentType="username"
            value={username}
            onChangeText={(user) => { setUsername(user) }}
            returnKeyType={"next"}
          />
        </View>

        <View style={[styles.inputContainer, styles.loginInput, { marginTop: 6 }]}>
          <TextInput
            style={{ height: 40, paddingLeft: 10 }}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="password"
            enablesReturnKeyAutomatically={true}
            returnKeyType="next"
            secureTextEntry={true}
            onChangeText={(pass) => { setPassword(pass) }}
            textContentType="password"
            value={password}
          />
        </View>
        {
          props.loading ? (
            <View style={styles.activityIndicatorContainer}>
              <ActivityIndicator size="small" color='white'/>
            </View>
          ) : (
              <Button title="Login" buttonStyle={styles.loginButton}
                onPress={handleLoginPress}
              />
            )
        }

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12 }}>
          <Text style={{ textAlign: 'center' }}>
            Are you a Visitor?
            </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Text style={{ color: '#d55154', textAlign: 'center' }}>
              Click here!
          </Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
};


//Map the redux state to your props.
const mapStateToProps = state => ({
  loading: state.loading,
  error: state.errorMessage
})

//Map your action creators to your props.
const mapDispatchToProps = {
  loginUser
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    width: 220,
    height: 220
  },
  applyButton: {
    backgroundColor: '#d55154',
    width: 300
  },
  inputContainer: {
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginRight: 5
  },
  refNoInput: {
    width: 183,
  },
  loginInput: {
    width: 300
  },
  statusButton: {
    backgroundColor: 'black'
  },
  loginButton: {
    backgroundColor: '#FF9500',
    width: 300,
    marginTop: 8,
  },
  activityIndicatorContainer: {
    backgroundColor: '#FF9500',
    width: 300,
    marginTop: 15,
    borderRadius: 6,
    paddingVertical: 12
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)