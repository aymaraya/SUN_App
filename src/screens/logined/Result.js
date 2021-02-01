import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PWithBackHeader from './../../components/PWithBackHeader';

const ResultModal = ({ route, navigation }) => {
  const { data, course } = route.params;
  console.log(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1, marginTop: 24, marginHorizontal: 14 }}>
        <PWithBackHeader title="Result" />
        <Text style={{ fontSize: 18, fontFamily: 'Roboto_medium', marginVertical: 18, textAlign: 'center' }}> {JSON.stringify(course)} </Text>
        <View style={{ paddingVertical: 6, paddingHorizontal: 24, flexDirection: 'row', alignSelf: 'center', borderWidth: 0.5 }}>
          <Text style={{ flex: 3, fontFamily: 'Roboto_bold', borderRightWidth: 0.3 }}> Assessment Tool </Text>
          <Text style={{flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium'}}> Total </Text>
        </View>
        {data.map((item, key) => (
          <View key={key} style={{ paddingVertical: 6, paddingHorizontal: 24, flexDirection: 'row', alignSelf: 'center', borderWidth: 0.3 }}>
            <Text style={{ flex: 3, fontFamily: 'Roboto_regular', borderRightWidth: 0.3 }}> {item.assessmentTool}  </Text>
            <Text style={{flex: 1, textAlign: 'center', fontFamily: 'Roboto_regular'}}> {item.totol} </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default ResultModal;
