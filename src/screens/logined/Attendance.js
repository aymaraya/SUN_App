import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'

export default AttendanceScreen = () => {

  const [isLoading, setLoading] = useState('empty');
  const [attendance, setAttendance] = useState();

  const getAttendance = async () => {
    setLoading('loading')
    try {
      await axios({
        method: 'post',
        url: 'https://api.sun.edu.ng/api/attendance',
        data: {
          studentId: 1113,
          from: fromDate,
          to: toDate
        }
      })
        .then(response => {
          setAttendance(response.data);
          setLoading('done');
          console.log(attendance)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Attendance </Text>
          <Text style={{ marginTop: 4, color: '#333333' }}>Select "From" and "to" date to fetch Attendance </Text>
          <View style={{ marginTop: 24 }}>
            <View>
              <Button onPress={showFromDatepicker} title="From" />
            </View>
            <View style={{ marginTop: 6 }}>
              <Button onPress={showToDatepicker} title="To" />
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
            <View style={{ marginTop: 8 }}>
              <Button onPress={getAttendance} title="FETCH ATTENDANCE" color='blue' />
            </View>
          </View>

          {(() => {
            if (isLoading === 'empty') {
              return (
                <View>

                </View>
              )
            } else if (isLoading === 'loading') {
              return (
                <View style={{marginTop: 24}}>
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
    </SafeAreaProvider>
  )
}

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