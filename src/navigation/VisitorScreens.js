import React from "react";
import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AdmissionScreen from '../screens/AdmissionScreen';
import ProgramScreen from '../screens/ProgramsScreen';
import NewScreen from '../screens/NewsScreen';
import MapScreen from '../screens/MapScreen';
import AboutScreen from '../screens/AboutScreen';
import CheckStatus from '../screens/subscreens/CheckStatus';
import TestScreen from '../screens/TestScreen';
import SoonScreen from '../screens/SoonScreen';

const VisitorScreens = createStackNavigator({
  Home: HomeScreen,
  Admission: AdmissionScreen,
  Programs: ProgramScreen,
  Map: MapScreen,
  News: NewScreen,
  About: AboutScreen,
  CheckStatus: CheckStatus,
  Soon: SoonScreen,
  Test: TestScreen
},
  {
    headerMode: 'none',
    initialRouteName: "Home"
  }
);

export default VisitorScreens;