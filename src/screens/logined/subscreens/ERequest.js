import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

const ERequestScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, marginHorizontal: 14, marginBottom: 4 }}>
        <Icon
          name='arrow-back'
          color='#007AFF'
          size={28}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={{ fontSize: 32, fontWeight: "bold", marginLeft: 4 }}>E-Request </Text>
      </View>
      <WebView
        source={{ uri: 'http://appt.sun.edu.ng/#/appointment?StudentId=1113'}}
        style={{ paddingTop: 0 }}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(ERequestScreen)