import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HomeHeader from './../components/HomeHeader'

import { MapView } from 'expo';

export default MapScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HomeHeader />
        {/**<MapView
        style={{ flex: 1, width, height }}
        showUserLocation
        initialRegion={{
          latitude: 11.985719,
          longitude: 8.533093,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 11.985719,
            longitude: 8.533093
          }}
          title={"Skyline University Nigeria"}
          description={"University in Kano"}
        />
        </MapView>**/}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});