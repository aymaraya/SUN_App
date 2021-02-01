import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';

import { Button } from 'react-native-elements';

import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'

import { connect } from 'react-redux';

const AttendanceScreen = (props) => {
  const [isLoading, setLoading] = useState('empty');
  const [attendance, setAttendance] = useState();
  

  const getAttendance = async () => {
    setLoading('loading')
    try {
      await axios({
        method: 'post',
        url: 'https://api.sun.edu.ng/api/attendance',
        data: {
          'studentId': Number(props.user.studentId),
          'from': fromDate,
          'to': toDate
        }
      })
        .then(response => {
          setAttendance(response.data);
          setLoading('done');
          console.log(attendance)
        })
        .catch(err => {
          alert(err)
          setLoading('empty')
        })
    } catch (error) {
      alert(error)
      setLoading('empty')
    }
  };


  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);



  const onChangeFrom = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowFrom(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowTo(Platform.OS === 'ios');
    setToDate(currentDate);
  };


  const showFromDatepicker = () => {
    setShowFrom(true);
  };
  const showToDatepicker = () => {
    setShowTo(true);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Attendance </Text>
        <Text style={{ marginTop: 4, color: '#333333' }}>Select "From" and "to" date to fetch Attendance </Text>
        <View style={{ marginTop: 24 }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button onPress={showFromDatepicker} title="From" buttonStyle={{paddingHorizontal: 62, backgroundColor: '#A1CAF1'}}/>
            <Button onPress={showToDatepicker} title="To" buttonStyle={{paddingHorizontal: 62, backgroundColor: '#A1CAF1'}} />
          </View>

          <View style={{ marginTop: 8 }}>
            <Button onPress={getAttendance} title="FETCH ATTENDANCE" buttonStyle={{backgroundColor: '#007FFF'}}/>
          </View>

          {showFrom && (
            <DateTimePicker
              value={fromDate}
              mode='date'
              display="calendar"
              dateFormat='year month day'
              onChange={onChangeFrom}
            />
          )}
          {showTo && (
            <DateTimePicker
              value={toDate}
              mode='date'
              display="calendar"
              dateFormat='year month day'

              onChange={onChangeTo}
            />
          )}
        </View>

        {(() => {
          if (isLoading === 'empty') {
            return (
              <View>

              </View>
            )
          } else if (isLoading === 'loading') {
            return (
              <View style={{ marginTop: 24 }}>
                <ActivityIndicator size='large' />
              </View>
            )
          } else {
            return (
              <ScrollView style={{ marginTop: 24 }}>
                {
                  attendance.map((item, key) => (
                    <View key={key} style={{ backgroundColor: '#004987', marginBottom: 14, padding: 14, borderRadius: 8 }}>
                      <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
                        {item.cdD_Description}
                      </Text>
                      <Text style={{ color: '#f6f6f6' }}>
                        {item.empName}
                      </Text>
                      <Text style={{ color: '#f6f6f6' }}>
                        From: {item.from} To: {item.to}
                      </Text>

                    </View>
                  ))
                }
              </ScrollView>
            )
          }

        })()}
      </View>
    </SafeAreaView>
  )
}
const mapStateToProps = state => ({
  user: state.userDetails
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 14
  },
  body: {
    flex: 1
  }
})

export default connect(mapStateToProps)(AttendanceScreen)