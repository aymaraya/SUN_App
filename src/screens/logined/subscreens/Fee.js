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
          <Title> Fee </Title>
        </Body>
        <Right />
      </Header>
    </Container >
  )
}
const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(FeeScreen)
