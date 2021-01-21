import React from "react";
import {
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';


import LoginScreen from './src/screens/LoginScreen'
import VisitorScreens from './src/navigation/VisitorScreens'
import StudentScreens from './src/navigation/StudentScreens'


const Stack = createStackNavigator();

function App(props) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {
            props.isAuthenticated ? (
              <Stack.Screen name="Profile" component={StudentScreens} />
            ) : (
              <Stack.Screen name="Visitor" component={VisitorScreens} />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(App)