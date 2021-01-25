import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default CourseInfoScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState();

  useEffect(() => {
    const getSchedule = async () => {
      try {

        const result = await axios.get(
          'http://api.sun.edu.ng:6060/api/class-schedule/1113/studentId'
        );

        setSchedule(result.data);

        setLoading(false);

      } catch (error) {
      }
    };
    getSchedule();
  }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.body}>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Data </Text>
          <Text style={{ marginTop: 4, color: '#333333' }}>Select "From" and "to" date to fetch Attendance </Text>



        </ScrollView>
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