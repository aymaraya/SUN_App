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
import {
  Container,
  Header,
  Left,
  Title,
  Icon,
  Button,
  Body,
  Right
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FeeScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [semesters, setSemesters] = useState();
  const [resultLoading, setResultLoading] = useState(false);
  const [batchCode, setBatchCode] = useState('');
  const [courseName, setCourseName] = useState('');
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
            console.log(semesters)
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

  const showFee = async () => {
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
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Profile')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title> Appointment </Title>
        </Body>
        <Right />
      </Header>
      { !isLoading && !resultLoading ? (
        !showMark ? (
          <ScrollView style={{ margin: 14 }}>
            {
              semesters.map((item, key) => (
                <TouchableOpacity key={key} style={{ paddingVertical: 12, borderTopWidth: 0.3 }} onPress={() => { setBatchCode(item.batchCode); setCourseName(item.code); showResult(); }}>
                  <Text> {item.code} </Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        ) : (
            <View style={{ paddingHorizontal: 14 }}>
              <Text style={{ fontSize: 18, fontFamily: 'Roboto_medium', marginVertical: 18, textAlign: 'center' }}> {courseName} </Text>
              <View style={{ paddingVertical: 6, paddingHorizontal: 24, flexDirection: 'row', alignSelf: 'center', borderWidth: 0.5 }}>
                <Text style={{ flex: 3, fontFamily: 'Roboto_bold', borderRightWidth: 0.3 }}> Assessment Tool </Text>
                <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> Total </Text>
              </View>
              {marks.map((item, key) => (
                <View key={key} style={{ paddingVertical: 6, paddingHorizontal: 24, flexDirection: 'row', alignSelf: 'center', borderWidth: 0.3 }}>
                  <Text style={{ flex: 3, fontFamily: 'Roboto_regular', borderRightWidth: 0.3 }}> {item.assessmentTool}  </Text>
                  <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_regular' }}> {item.totol} </Text>
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
          <ActivityIndicator size='large' />
        )
      }
    </Container >
  )
}
const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(FeeScreen)
