import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screens/LoginScreen'
import VisitorScreens from './src/navigation/VisitorScreens'
import StudentScreens from './src/navigation/StudentScreens'

export default createAppContainer(createSwitchNavigator(
  {
    Login: LoginScreen,
    Visitor: VisitorScreens,
    Student: StudentScreens
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
));