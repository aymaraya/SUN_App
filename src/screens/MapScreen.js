import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Linking,
  View,
  Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  Header,
  Left,
  Title,
  Icon,
  Button,
  Body,
  Right
} from 'native-base';

export default MapScreen = (props) => {
  const openMap = () => {
    Linking.openURL('https://maps.app.goo.gl/nzsiNYeGe9PAdrP57');
  }
  useEffect(() => {
    openMap();
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Maps and Directions </Title>
        </Body>
        <Right />
      </Header>
      <View style={{ alignItems: 'center', paddingTop: 256, paddingBottom: 256 }}>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6 }}
          onPress={() => openMap()}>
          <Text style={{ textAlign: 'center', color: 'white' }}>
            Open Map
        </Text>
        </TouchableOpacity>
      </View>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  titleBar: {
    backgroundColor: '#eee',
    paddingTop: 0,
    paddingLeft: 18,
    paddingBottom: 5
  }

});
