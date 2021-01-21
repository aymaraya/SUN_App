import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default ScheduleScreen = () => {

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
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Schedule </Text>
          <Text style={{ marginTop: 4, color: '#333333' }}>Below is your Weekly Schedule </Text>

          <View style={{ marginTop: 24 }}>

            <View style={{ backgroundColor: '#004987', marginBottom: 14,padding: 14, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
                MON
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.TASIU [09:30-10:30] - CSC1313-[C-11]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.AZEEZ [13:45-14:45] - GST1211-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
            </View>

            <View style={{ backgroundColor: '#004987', padding: 14, marginBottom: 14, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
                TUE
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.TASIU [09:30-10:30] - CSC1313-[C-11]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.AZEEZ [13:45-14:45] - GST1211-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
            </View>

            <View style={{ backgroundColor: '#004987', padding: 14, marginBottom: 14, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
                WED
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.TASIU [09:30-10:30] - CSC1313-[C-11]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.AZEEZ [13:45-14:45] - GST1211-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
            </View>

            <View style={{ backgroundColor: '#004987', padding: 14, marginBottom: 14, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
                THU
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.TASIU [09:30-10:30] - CSC1313-[C-11]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.AZEEZ [13:45-14:45] - GST1211-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
            </View>

            <View style={{ backgroundColor: '#004987', padding: 14, marginBottom: 14, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
                FRI
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.TASIU [09:30-10:30] - CSC1313-[C-11]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * DR.AZEEZ [13:45-14:45] - GST1211-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
              <Text style={{ color: '#f6f6f6' }}>
                * MR.KABIRU [15:00-16:00] - GST1213-[C-9]
              </Text>
            </View> 

          </View>

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