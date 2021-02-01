import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AssessmentScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [courses, setCourses] = useState();
  const [resultLoading, setResultLoading] = useState(false);
  const [batchCode, setBatchCode] = useState('');
  const [courseName, setCourseName] = useState('')

  useEffect(() => {
    const getCourses = async () => {
      try {
        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/assessment-mark/batch-codes/' + props.user.studentId + '/studentId',
          data: {
            studentId: Number(props.user.studentId)
          }
        })
          .then(response => {
            setCourses(response.data);
            setLoading(false);
            console.log(courses)
          })
          .catch(err => {
            alert(err)
          })
      } catch (error) {
        alert(error)
      }
    };
    getCourses();
  }, []);

  const showResult = async () => {
    try {
      setResultLoading(true)
      await axios({
        method: 'get',
        url: 'https://api.sun.edu.ng/api/assessment-mark/' + Number(props.user.studentId) + '/studentId/' + batchCode + '/batchCode',
        data: {
          'studentId': Number(props.user.studentId),
          'batchCode': batchCode
        }
      })
        .then(response => {
          setResultLoading(false)
          props.navigation.navigate('Result', { data: response.data, course: courseName})
        })
        .catch(err => {
          alert(err)
          setResultLoading(false)
        })
    } catch (error) {
      alert(error)
      setResultLoading(false)
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Assessment Marks </Text>
        <Text style={{ marginTop: 4, color: '#333333' }}>Select course </Text>
      </View>
      { !isLoading && !resultLoading ? (
        <ScrollView style={{ margin: 14 }}>
          {
            courses.map((item, key) => (
              <TouchableOpacity key={key} style={{ paddingVertical: 12, borderTopWidth: 0.3 }} onPress={() => { setBatchCode(item.batchCode); setCourseName(item.code); showResult(); }}>
                <Text> {item.code} </Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>

      ) : (
          <ActivityIndicator size='large' />
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
  }
})
export default connect(mapStateToProps)(AssessmentScreen)