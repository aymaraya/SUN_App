import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { WebView } from 'react-native-webview';
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

export default TestScreen = (props) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Aptitude Test</Title>
        </Body>
        <Right />
      </Header>
      <WebView
        source={{ uri: 'https://apt.sun.edu.ng' }}
        style={{ paddingTop: 0 }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
