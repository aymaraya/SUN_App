import React, { Component, useState } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View
} from 'react-native';

import { WebView } from 'react-native-webview';

import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Title,
  Content,
  Icon,
  Button,
  Body,
  Right
} from 'native-base';

const ActivityIndicatorComponent = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator
        color="#009688"
        size="large"
      />
      <Text style={{ textAlign: 'center' }}> Loading Webview </Text>
    </View>
  );
}

const Program1 = () => {
  const [visible, setVisible] = useState(true)

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://sun.edu.ng/schools/science-information-technology/' }}
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        onError={() => alert('Something went wrong')}
        onLoad={() => setVisible(false)} />
      {visible ? <ActivityIndicatorComponent /> : null}
    </View>
  )
}

const Program2 = () => {
  const [visible, setVisible] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://sun.edu.ng/schools/art-management-science' }}
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onError={() => alert('Something went wrong')}
        onLoad={() => setVisible(false)}
        style={{ flex: 1 }} />
      {visible ? <ActivityIndicatorComponent /> : null}
    </View>
  )
}

export default ProgramScreen = (props) => {

  return (
    <Container>
      <Header hasTabs>
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
          <Program1 />
        </Tab>

        <Tab heading="Program II"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
          <Program2 />
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
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
