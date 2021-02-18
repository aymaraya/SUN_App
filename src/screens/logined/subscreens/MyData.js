import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';

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

import { connect } from 'react-redux'
import axios from 'axios'

const DataItem = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, marginBottom: 12 }}>
      <Text style={{ fontSize: 16, fontFamily: 'Roboto_medium' }}>
        {props.title}
      </Text>
      <Text style={{ flex: 1, marginLeft: 4, fontFamily: 'Roboto_regular' }}>
        {props.content}
      </Text>
    </View>
  )
}

const MyDataScreen = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getSchedule = async () => {
      try {
        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/student-detail/' + props.user.studentId + '/studentId',
          data: { studentId: Number(props.user.studentId) }
        })
          .then(response => {
            setData(response.data);
            setLoading(false);
            console.log(data)
          })
          .catch(err => {
            alert.log(err)
            setLoading(false)
          })
      } catch (error) {
        alert.log(error)
        setLoading(false)
      }
    };
    getSchedule();
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Profile')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title> My Data</Title>
        </Body>
        <Right />
      </Header>
      {isLoading ? (
        <ActivityIndicator size='large' />
      ) : (
          <ScrollView style={{ marginTop: 24, marginHorizontal: 14 }}>
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
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.userDetails
})

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

export default connect(mapStateToProps)(MyDataScreen)