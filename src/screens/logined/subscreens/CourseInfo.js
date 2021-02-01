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
import { connect } from 'react-redux'
import axios from 'axios'
import PWithBackHeader from './../../../components/PWithBackHeader'

const DataItem = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 12, paddingHorizontal: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Roboto_medium' }}>
        {props.title}
      </Text>
      <Text style={{ flex: 1, marginLeft: 4, fontFamily: 'Roboto_regular' }}>
        {props.content}
      </Text>
    </View>
  )
}

const CourseInfoScreen = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getSchedule = async () => {
      try {

        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/AcademicProfile/student-credit-information/' + props.user.studentId + '/studentId',
          data: { studentId: Number(props.user.studentId) }
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
        <PWithBackHeader title="Course Info" />
        {isLoading ? (
          <ActivityIndicator size='large' />
        ) : (
            <ScrollView style={{ marginTop: 24 }}>
              <DataItem title='Student Name: ' content={data.studentName} />
              <DataItem title="Level: " content={data.level} />
              <DataItem title="CGPA: " content={data.cgpa} />
              <DataItem title="Faculty: " content={data.facultyName} />
              <DataItem title="Student Reg No: " content={data.stud_Regno} />
              <DataItem title="Credit Attended: " content={data.creditAttended} />
              <DataItem title="Credit Earned: " content={data.creditEarned} />
              <DataItem title="Total Credit: " content={data.totalCredit} />
              <DataItem title="Credit to be Completed: " content={data.credittobecompleted} />
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

const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(CourseInfoScreen)