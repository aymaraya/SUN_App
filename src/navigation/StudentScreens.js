import React from "react";
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScheduleScreen from '../screens/logined/Schedule';
import AttendanceScreen from '../screens/logined/Attendance';
import ResultScreen from '../screens/logined/MainResult';
import AssessmentScreen from '../screens/logined/Assessment';
import ResultsScreen from '../screens/logined/Results';
import ProfileScreen from '../screens/logined/ProfileScreen';
import MyDataScreen from '../screens/logined/subscreens/MyData';
import ERequestScreen from '../screens/logined/subscreens/ERequest';
import CDPManualScreen from '../screens/logined/subscreens/CDPManual';
import CourseInfoScreen from '../screens/logined/subscreens/CourseInfo';
import AppointmentScreen from '../screens/logined/subscreens/Appointment';
import ComplaintScreen from '../screens/logined/subscreens/Complaint';
import FeeScreen from '../screens/logined/subscreens/Fee';


import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="My Data" component={MyDataScreen} />
      <ProfileStack.Screen name="Course Info" component={CourseInfoScreen} />
      <ProfileStack.Screen name="E Request" component={ERequestScreen} />
      <ProfileStack.Screen name="CDP Manual" component={CDPManualScreen} />
      <ProfileStack.Screen name="Appointment" component={AppointmentScreen} />
      <ProfileStack.Screen name="Complaint" component={ComplaintScreen} />
      <ProfileStack.Screen name="Fee" component={FeeScreen} />
    </ProfileStack.Navigator>
  )
}

const AssessmentStack = createStackNavigator();

const ResultStackScreen = () => {
  return (
    <AssessmentStack.Navigator
      initialRouteName="Result"
      headerMode="none">
        <AssessmentStack.Screen name="Result" component={ResultScreen} />
        <AssessmentStack.Screen name="Assessment" component={AssessmentScreen} />
        <AssessmentStack.Screen name="Results" component={ResultsScreen} />
    </AssessmentStack.Navigator>
  )
}

const StudentScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let IconComponent = Ionicons;
          let iconName;
          if (route.name === 'Schedule') {
            iconName = `ios-calendar`;
          } else if (route.name === 'Attendance') {
            iconName = `ios-checkmark-circle`;
          } else if (route.name === 'Result') {
            iconName = `ios-list`;
          } else {
            iconName = `md-person`;
          }
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={color} />;
        }
      })}
      tabBarIcon={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Result" component={ResultStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}

export default StudentScreens;