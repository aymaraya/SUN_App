import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
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
import { WebView } from 'react-native-webview';

export default AboutScreen = (props) => {

  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>About Us </Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.contentContainer}>
        <WebView
          source={{ uri: 'https://sun.edu.ng/about/' }}
          style={{ paddingTop: 0 }}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
  },
  titleBar: {
    backgroundColor: '#eee',
    paddingTop: 0,
    paddingLeft: 18,
    paddingBottom: 5
  }
});
