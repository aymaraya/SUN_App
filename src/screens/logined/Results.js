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

import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultsScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [semesters, setSemesters] = useState();
  const [resultLoading, setResultLoading] = useState(false);
  const [Id, setId] = useState();
  const [semesterName, setSemesterName] = useState('');
  const [marks, setMarks] = useState();
  const [showMark, setShowMark] = useState(false);


  useEffect(() => {
    const getSemesters = async () => {
      try {
        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/result/semester/' + props.user.studentId + '/studentId',
          data: {
            studentId: Number(props.user.studentId)
          }
        })
          .then(response => {
            setSemesters(response.data);
            setLoading(false);
          })
          .catch(err => {
            alert(err)
          })
      } catch (error) {
        alert(error)
      }
    };
    getSemesters();
  }, []);

  const showResult = async () => {
    console.log(Id)
    try {
      setResultLoading(true)
      await axios({
        method: 'get',
        url: 'https://api.sun.edu.ng/api/result/' + Number(props.user.studentId) + '/studentId/' + Id + '/semesterId',
        data: {
          'studentId': Number(props.user.studentId),
          'semesterId': Id
        }
      })
        .then(response => {
          setResultLoading(false)
          setMarks(response.data)
          setShowMark(true)
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
    <View>
      { !isLoading && !resultLoading ? (
        !showMark ? (
          <ScrollView style={{ margin: 14 }}>
            {
              semesters.map((item, key) => (
                <TouchableOpacity key={key} style={{ paddingVertical: 12, borderTopWidth: 0.3 }} onPress={() => { setId(item.semesterId); setSemesterName(item.semesterName); console.log(Id); showResult(); }}>
                  <Text> {item.semesterName} </Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        ) : (
            <View style={{ paddingHorizontal: 14 }}>
              <Text style={{ fontSize: 18, fontFamily: 'Roboto_medium', marginVertical: 18, textAlign: 'center' }}> {semesterName} </Text>
              <View style={{ paddingVertical: 6, paddingHorizontal: 24, flexDirection: 'row', alignSelf: 'center', borderWidth: 0.5 }}>
                <Text style={{ flex: 3, fontFamily: 'Roboto_bold', borderRightWidth: 0.3 }}> Course code </Text>
                <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> Mark </Text>
                <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> Credit </Text>
                <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> Grade </Text>
                <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> GPA </Text>
              </View>
              {marks.map((item, key) => (
                <View key={key} style={{ paddingVertical: 6, paddingHorizontal: 24, flexDirection: 'row', alignSelf: 'center', borderWidth: 0.3 }}>
                  <Text style={{ flex: 3, fontFamily: 'Roboto_regular', borderRightWidth: 0.3 }}> {item.courseCode} </Text>
                  <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> {item.mark} </Text>
                  <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> {item.credit} </Text>
                  <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> {item.crade} </Text>
                  <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> {item.gpa} </Text>
                </View>
              ))}

              <TouchableOpacity
                style={{ marginVertical: 24, paddingHorizontal: 14, paddingVertical: 8, backgroundColor: '#ff2929', borderRadius: 6 }}
                onPress={() => setShowMark(false)}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}> Go back </Text>
              </TouchableOpacity>
            </View>
          )
      ) :
        (
          <ActivityIndicator size='large' style={{marginTop: 5}}/>
        )
      }
    </View >
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
export default connect(mapStateToProps)(ResultsScreen)
