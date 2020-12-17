import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

export default Procedure = () => {

  state = {
    contents: [
      {
        title: 'Admission Criteria',
        body: 'Undergraduate Admission. The entry requirements for admission to bachelor degree programmes include: Regular admission to a Bachelor degree degree programme requires a High School Leaving Certificate with an aggregrate score of 60 or “C” or “Credit”, or equivalent.',
      },
      {
        title: 'Application Process',
        body: 'Undergraduate Admission. The entry requirements for admission to bachelor degree programmes include: Regular admission to a Bachelor degree degree programme requires a High School Leaving Certificate with an aggregrate score of 60 or “C” or “Credit”, or equivalent.',
      },
      {
        title: 'Admissions Policy',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Fees',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ alignSelf: 'stretch' }}>
        {
          this.state.contents
            ? this.state.contents.map((param, i) => {
              return (
                <View style={{ paddingTop: 15 }}>
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View >
                        <Text style={{
                          fontSize: 15,
                          color: '#007AFF',
                          fontWeight: '500',
                        }}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text style={[
                      styles.txt,
                      {
                        fontSize: 14,
                        lineHeight: 30
                      }
                    ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                </View>
              );
            })
            : null
        }
        <View style={{ height: 96 }} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5
  }
})