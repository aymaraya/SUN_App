import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import PWithBackHeader from './../../../components/PWithBackHeader';

const CDPManualScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 24, marginHorizontal: 14 }}>
        <PWithBackHeader title="CDP Manual" />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Roboto_medium'}}> Currently not available.. </Text>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(CDPManualScreen)
