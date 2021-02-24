import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Moment from 'moment';


import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Text,
  Button
} from 'native-base';
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
  Moment.locale('en');


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
    <Container>
      <Header>
        <Body>
          <Title> Attendance</Title>
        </Body>
      </Header>

      <Content style={styles.body}>
        <View style={{ marginTop: 24 }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button onPress={showFromDatepicker} small light style={{ width: '48%' }}>
              <Text>From: {Moment(fromDate).format('DD/MM/yyyy')}</Text> 
            </Button>
            <Button onPress={showToDatepicker} small light style={{ width: '48%' }}>
              <Text>To: {Moment(toDate).format('DD/MM/yyyy')}</Text>
            </Button>
          </View>
          
          <View style={{ marginTop: 8, alignItems: 'center' }}>
            <Button onPress={getAttendance} style={{ width: '100%', backgroundColor: '#004987', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Fetch Attendance</Text>
            </Button>
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
                      <Text style={{ fontSize: 13, color: '#f6f6f6' }}>
                        {item.empName}
                      </Text>
                      <Text style={{ fontSize: 13, color: '#f6f6f6' }}>
                        From: {item.from} To: {item.to}
                      </Text>

                    </View>
                  ))
                }
              </ScrollView>
            )
          }

        })()}
      </Content>
    </Container>
  )
}
const mapStateToProps = state => ({
  user: state.userDetails
})

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 14
  }
})

export default connect(mapStateToProps)(AttendanceScreen)