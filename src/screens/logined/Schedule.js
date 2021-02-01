import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux';

import { SafeAreaView } from 'react-native-safe-area-context';

const ScheduleScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState();
  useEffect(() => {
    const getSchedule = async () => {
      try {
        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/class-schedule/' + props.user.studentId + '/studentId'
        })
          .then(response => {
            setSchedule(response.data);
            setLoading(false);
            console.log(schedule)

          })
          .catch(err => {
            console.log(err)
          })
      } catch (error) {
        console.log(error)
      }
    };
    getSchedule();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Schedule </Text>
        <Text style={{ marginTop: 4, color: '#333333' }}>Below is your Weekly Schedule </Text>
      </View>
      { isLoading ? (
        <ActivityIndicator size='large' />
      ) : (
        <ScrollView style={{ margin: 12 }}>
          {
            schedule.map((item, key) => (
              <View key={key} style={
                item.day === 'MON' ? styles.mon : item.day === 'TUE' ? styles.tue : item.day === 'WED' ? styles.wed : item.day === 'THU' ? styles.thur : item.day === 'FRI' ? styles.fri : item.day === 'SAT' ? styles.sat : styles.sun
              }>
                <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
                  {item.day}
                </Text>
                <Text style={{ color: '#f6f6f6' }}>
                  * {item.session1}
                </Text>
                <Text style={{ color: '#f6f6f6' }}>
                  * {item.session2}
                </Text>
                <Text style={{ color: '#f6f6f6' }}>
                  * {item.session3}
                </Text>
                <Text style={{ color: '#f6f6f6' }}>
                  * {item.session4}
                </Text>
                <Text style={{ color: '#f6f6f6' }}>
                  * {item.session5}
                </Text>
              </View>
              ))
            }
          </ScrollView>
        )
      }
    </SafeAreaView >
  )
}
const mapStateToProps = state => ({
  user: state.userDetails
})
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 14
  },
  mon: {
    backgroundColor: '#fa971e', marginBottom: 14, padding: 14, borderRadius: 8
  },
  tue: {
    backgroundColor: '#1cba61', marginBottom: 14, padding: 14, borderRadius: 8
  },
  wed: {
    backgroundColor: '#F373B1', marginBottom: 14, padding: 14, borderRadius: 8
  },
  thur: {
    backgroundColor: '#426AEE', marginBottom: 14, padding: 14, borderRadius: 8
  },
  fri: {
    backgroundColor: '#EA5D15', marginBottom: 14, padding: 14, borderRadius: 8
  },
  sat: {
    backgroundColor: '#dd1ddd', marginBottom: 14, padding: 14, borderRadius: 8
  },
  sun: {
    backgroundColor: '#06a1b2', marginBottom: 14, padding: 14, borderRadius: 8
  }
})
export default connect(mapStateToProps)(ScheduleScreen)