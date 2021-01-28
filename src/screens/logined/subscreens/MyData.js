import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import axios from 'axios'

const DataItem = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>
        {props.title}
      </Text>
      <Text style={{ flex: 1, marginLeft: 4 }}>
        {props.content}
      </Text>
    </View>
  )
}

export default MyDataScreen = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getSchedule = async () => {
      try {

        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/student-detail/1113/studentId',
          data: { studentId: 1113 }
        })
          .then(response => {
            setData(response.data);
            setLoading(false);
            console.log(data)
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
      <ScrollView style={styles.body}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name='arrow-back'
            color='#007AFF'
            size={28}
            onPress={() => props.navigation.goBack()}
          />
          <Text style={{ fontSize: 32, fontWeight: "bold", marginLeft: 4 }}>My Data </Text>
        </View>

        {isLoading ? (
          <ActivityIndicator size='large' />
        ) : (
            <ScrollView style={{ marginTop: 24 }}>
              <Image source={{ uri: 'data:image/png;base64,' + data.photo }} style={styles.thumbnail} />
              <DataItem title='Student ID: ' content={data.studentId} />
              <DataItem title="Full Name : " content={data.studentName} />
              <DataItem title="Course: " content={data.course} />
              <DataItem title="Level: " content={data.level} />
              <DataItem title="Nationality: " content={data.nationality} />
              <DataItem title="Term Name: " content={data.termName} />
              <DataItem title="Shift: " content={data.shift} />
              <DataItem title="Student Type: " content={data.studentType} />
              <DataItem title="School: " content={data.school} />
              <DataItem title="Department: " content={data.dept} />
            </ScrollView>
          )
        }

      </ScrollView>
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
  },
  thumbnail: {
    alignSelf: 'center',
    width: 144,
    height: 144,
    resizeMode: 'cover',
    borderRadius: 90,
    marginBottom: 24
  },
})