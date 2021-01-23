import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';

const Schedule = ({ day, session1, session2, session3, session4, session5 }) => {
  <View style={{ backgroundColor: '#004987', marginBottom: 14, padding: 14, borderRadius: 8 }}>
    <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
      {day}
    </Text>
    <Text style={{ color: '#f6f6f6' }}>
      * {session1}
    </Text>
    <Text style={{ color: '#f6f6f6' }}>
      * {session2}
    </Text>
    <Text style={{ color: '#f6f6f6' }}>
      * {session3}
    </Text>
    <Text style={{ color: '#f6f6f6' }}>
      * {session4}
    </Text>
    <Text style={{ color: '#f6f6f6' }}>
      * {session5}
    </Text>
  </View>
}

export default ScheduleScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState();

  useEffect(() => {
    const getSchedule = async () => {
      try {

        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/class-schedule/1113/studentId'
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
    <SafeAreaView style={styles.container}>

      <View style={styles.body}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Schedule </Text>
        <Text style={{ marginTop: 4, color: '#333333' }}>Below is your Weekly Schedule </Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
            <ScrollView style={{ marginTop: 24 }}>

              {
                schedule.map((item, key) => (
                  <View key={key} style={{ backgroundColor: '#004987', marginBottom: 14, padding: 14, borderRadius: 8 }}>
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
          )}
      </View>


    </SafeAreaView>
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