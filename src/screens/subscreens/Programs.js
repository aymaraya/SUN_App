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

export default Programs = () => {

  return (
    <View style={styles.container}>
      <ScrollView style={{ alignSelf: 'stretch' }}>

        <View style={{ paddingTop: 15 }}>
          <DropDownItem
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
                }}> School of Science and IT</Text>
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

              <Text style={{ fontWeight: 'bold' }}> Department of Mathematical: </Text>
              {'\n'}1. B.sc. Computer Science {'\n'}
                2. B.sc. Software Engineering {'\n'}

              <Text style={{ fontWeight: 'bold' }}> Department of Chemical Science: </Text>
              {'\n'}1. B.sc. Chemistry {'\n'}
                2. B.sc. Biochemistry {'\n'}
                3. B.sc. Industrial Chemistry {'\n'}

              <Text style={{ fontWeight: 'bold' }}> Department of Geology: </Text>
              {'\n'}1. B.sc. Geology {'\n'}

              <Text style={{ fontWeight: 'bold' }}> Department of Physics Science: </Text>
              {'\n'}1. B.sc. Physics and Electronics {'\n'}

              <Text style={{ fontWeight: 'bold' }}> Department of Biological Science: </Text>
              {'\n'}1. B.sc. Biology {'\n'}
                1. B.sc. MicroxBiology {'\n'}

            </Text>
          </DropDownItem>
        </View>

        <View style={{ paddingTop: 15 }}>
          <DropDownItem
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
                }}> School of Arts, Management & Social Science</Text>
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

              <Text style={{ fontWeight: 'bold' }}> Department of Mass-Communication: </Text>
              {'\n'}1. B.sc. Mass Communication {'\n'}

              <Text style={{ fontWeight: 'bold' }}> Department of Management: </Text>
              {'\n'}1. B.sc. Business Administration {'\n'}
                  2. B.sc. Entrepreneurship {'\n'}
                  3. B.sc. Accounting {'\n'}

              <Text style={{ fontWeight: 'bold' }}> Department of Economics: </Text>
              {'\n'}1. B.sc. Economics {'\n'}

              <Text style={{ fontWeight: 'bold' }}> Department of Political Science: </Text>
              {'\n'}1. B.sc. International Relations {'\n'}

            </Text>
          </DropDownItem>
        </View>

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