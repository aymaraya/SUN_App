import React, { Component, useState } from 'react';
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
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

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


const AppointmentScreen = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Profile')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title> Appointment </Title>
        </Body>
        <Right />
      </Header>
      <WebView
        source={{ uri: 'http://appt.sun.edu.ng/#/appointment?StudentId=' + Number(props.user.studentId) }}
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
        style={{ flex: 1 }}
      />
      {visible ? <ActivityIndicatorComponent /> : null}
    </Container>
  );
}
const styles = StyleSheet.create({
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

const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(AppointmentScreen)
