import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, Icon } from 'react-native-elements';

import {
  Container,
  Tab,
  Tabs
} from 'native-base';

import Procedure from './subscreens/Procedure';
import Requirements from './subscreens/Requirements';
import Application from './subscreens/Application';

export default AdmissionScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <Header
          barStyle="light-content"
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  name='chevron-left'
                  color='#007AFF'
                  size={28}
                />
                <Text style={{ color: '#007AFF' }}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>
          }
          rightComponent={{ icon: 'share', color: '#007AFF', size: 18, marginRight: 15 }}
          containerStyle={{
            backgroundColor: '#eee',
            justifyContent: 'space-around',
          }}
        />
        <View style={styles.titleBar}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            Admissions
          </Text>
        </View>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#007AFF' }}>
          <Tab heading="Procedures"
            tabStyle={{ backgroundColor: '#fff' }}
            textStyle={{ color: 'black' }}
            activeTabStyle={{ backgroundColor: '#fff' }}
            activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>

            <Procedure />
          </Tab>

          <Tab heading="Requirements"
            tabStyle={{ backgroundColor: '#fff' }}
            textStyle={{ color: 'black' }}
            activeTabStyle={{ backgroundColor: '#fff' }}
            activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
            <Requirements />
          </Tab>

          <Tab heading="Application"
            tabStyle={{ backgroundColor: '#fff' }}
            textStyle={{ color: 'black' }}
            activeTabStyle={{ backgroundColor: '#fff' }}
            activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
            <Application />
          </Tab>
        </Tabs>
      </Container>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  titleBar: {
    backgroundColor: '#eee',
    paddingTop: 0,
    paddingLeft: 18,
    paddingBottom: 5
  }

});
