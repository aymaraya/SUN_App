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
  Alert
} from 'react-native';
import axios from 'axios'
import { Button } from 'react-native-elements';

export default LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);


  const loginUser = async () => {
    try {
      if (username == '' || password == '') {
        Alert.alert('Error','Please input your login details')
      }
      else {
        setLoading(true);
        await axios(
          {
            method: 'POST',
            url: 'https://api.sun.edu.ng/api/login/authenticate',
            data: {
              'username': username,
              'password': password
            },
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer DA7uzz4i5bEjHhQ5kCte5Dbajhd40OX8hwW-sW5xNZGtCGbikDSTQ2AmP1I8E1vu4UM2GWN_vR3lDW5_yfZmaICLD1-v5MQPQqHnj_G_AXlFCU9mdWIeLFwo0u3MXnYx'
            }
          }
        )
          .then(
            function (response) {
              if (response.data.isAuthenticated == true) {
                console.log(response.data);
                navigation.navigate('Profile', { id: response.data.studentId, token: response.data.token })
              }
              else {
                Alert.alert('Error', 'Something went wrong, please try again!');
                setLoading(false)
              }
            }
          )
      }
    }
    catch (error) {
      console.log(error)
    }
  };


  return (
    <View style={styles.container}>

      <View style={{ marginTop: 10 }}>
        <Image
          source={require('./../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>

      <View style={{ flexDirection: 'column' }}>
        <Button title="Apply Now" buttonStyle={styles.applyButton}
          onPress={() => navigation.navigate('Admission')} />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={[styles.inputContainer, styles.refNoInput]}>
            <TextInput
              style={{ height: 40, paddingLeft: 10 }}
              placeholder="Application ref number"
              onChangeText={(text) => this.setState({ text })}
            />
          </View>
          <Button title="Check Status" buttonStyle={styles.statusButton}
            onPress={() => navigation.navigate('CheckStatus')} />
        </View>
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>
          Are you a Visitor?
            </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: '#d55154', textAlign: 'center' }}>
            Click here!
          </Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView behavior="height" style={{ marginBottom: 20 }}>

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

        <View style={[styles.inputContainer, styles.loginInput, { marginTop: 10 }]}>
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
          isLoading ? <ActivityIndicator size="large" style={{ marginTop: 20 }} /> : (
            <Button title="Login" buttonStyle={styles.loginButton}
              onPress={() => loginUser()}
            />
          )
        }


      </KeyboardAvoidingView>
    </View>
  );
}
  ;
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
    marginTop: 15,
    marginBottom: 15
  },
});
