import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
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

export default AboutScreen = (props) => {
  const [visible, setVisible] = useState(true)

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>About Us</Title>
        </Body>
        <Right />
      </Header>
      <WebView
        source={{ uri: 'https://sun.edu.ng/about/' }}
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        onError={() => alert('Something went wrong')}
        onLoad={() => setVisible(false)}
        />
      {visible ? <ActivityIndicatorComponent /> : null} 
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

