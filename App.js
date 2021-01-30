import React from "react";
import {
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';


import VisitorScreens from './src/navigation/VisitorScreens';
import StudentScreens from './src/navigation/StudentScreens';


const Stack = createStackNavigator();

function App(props) {
  return (
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
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(App)