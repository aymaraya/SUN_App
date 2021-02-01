import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import PWithBackHeader from './../../../components/PWithBackHeader';

const ComplaintScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 24, marginHorizontal: 14 }}>
        <PWithBackHeader title="Complaint" />
      </View>
      <WebView
        source={{ uri: 'http://comp.sun.edu.ng/#/dashboard?username=' + Number(props.user.studentId) }}
        style={{ paddingTop: 0 }}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(ComplaintScreen)
