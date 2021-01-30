import React from "react";
import {
  createStackNavigator,
} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AdmissionScreen from '../screens/AdmissionScreen';
import ProgramScreen from '../screens/ProgramsScreen';
import NewScreen from '../screens/NewsScreen';
import MapScreen from '../screens/MapScreen';
import AboutScreen from '../screens/AboutScreen';
import CheckStatus from '../screens/subscreens/CheckStatus';
import TestScreen from '../screens/TestScreen';
import TourScreen from '../screens/TourScreen';

const Stack = createStackNavigator();

const VisitorScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Admission" component={AdmissionScreen} />
      <Stack.Screen name="Programs" component={ProgramScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="News" component={NewScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="CheckStatus" component={CheckStatus} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Tour" component={TourScreen} />
    </Stack.Navigator>
  )
}

export default VisitorScreens;