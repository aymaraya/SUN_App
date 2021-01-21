import React from "react";
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScheduleScreen from '../screens/logined/Schedule';
import AttendanceScreen from '../screens/logined/Attendance';
import NotificationScreen from '../screens/logined/Notification';
import ProfileScreen from '../screens/logined/ProfileScreen';

const Tab = createBottomTabNavigator();

const StudentScreens = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Profile"
      screenOptions= {({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let IconComponent = Ionicons;
          let iconName;
          if (route.name === 'Schedule') {
            iconName = `ios-calendar`;
          } else if (route.name === 'Attendance') {
            iconName = `ios-checkmark-circle`;
          } else if (route.name === 'Notification') {
            iconName = `ios-notifications`;
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
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default StudentScreens;