import React, { Component, useState } from 'react';
import { ActivityIndicator } from 'react-native';
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
import { connect } from 'react-redux';

const ERequestScreen = (props) => {
  const [visible, setVisible] = useState(false)
  return (
    <Container style={{ flex: 1 }}>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Profile')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title> E-Request </Title>
        </Body>
        <Right />
      </Header>
      <WebView
        source={{ uri: 'http://rqt.sun.edu.ng/#/request?username=' + Number(props.user.studentId) }}
        style={{ paddingTop: 0 }}
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible ? <ActivityIndicator /> : null}
    </Container>
  );
}

const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(ERequestScreen)