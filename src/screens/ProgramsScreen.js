import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import { WebView } from 'react-native-webview';

import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Title,
  Icon,
  Button,
  Body,
  Right
} from 'native-base';


export default ProgramScreen = (props) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Programs</Title>
        </Body>
        <Right />
      </Header>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#007AFF' }}>
        <Tab heading="Program I"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>

          <WebView
            source={{ uri: 'https://sun.edu.ng/schools/science-information-technology/' }}
            style={{ paddingTop: 0 }}
          />
        </Tab>

        <Tab heading="Program II"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
          <WebView
            source={{ uri: 'https://sun.edu.ng/schools/art-management-science' }}
            style={{ paddingTop: 0 }}
          />
        </Tab>
      </Tabs>

    </Container>
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
