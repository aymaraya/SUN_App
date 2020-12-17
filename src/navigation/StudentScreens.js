import React from "react";
import {
  createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScheduleScreen from '../screens/logined/Schedule';
import AttendanceScreen from '../screens/logined/Attendance';
import NotificationScreen from '../screens/logined/Notification';
import ProfileScreen from '../screens/logined/ProfileScreen';

export default createBottomTabNavigator({
  Schedule: ScheduleScreen,
  Attendance: AttendanceScreen,
  Notification: NotificationScreen,
  Profile: ProfileScreen
},
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: ({ navigation }) => ({
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = `ios-calendar`;
        } else if (routeName === 'Attendance') {
          iconName = `ios-checkmark-circle`;
        } else if (routeName === 'Notification') {
          iconName = `ios-notifications`;
        } else {
          iconName = `md-person`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }
  }
)
