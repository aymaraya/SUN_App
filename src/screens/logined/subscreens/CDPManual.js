import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator
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

const CDPManualScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getSchedule = async () => {
      try {
        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/cdp/' + props.user.studentId + '/studentId',
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
          <Title> Faculty </Title>
        </Body>
        <Right />
      </Header>
      {isLoading ? (
        <ActivityIndicator size='large' style={{marginTop: 5}}/>
      ) : (
          <ScrollView style={{ marginTop: 24, marginHorizontal: 14 }}>
            {
              data.map((item, key) => (
                <View key={key} style={{
                  padding: 14, borderTopWidth: 0.3
                }}>
                  <Text style={{ fontFamily: 'Roboto_medium' }}>
                    {item.employeeName}
                  </Text>
                  <Text style={{ fontFamily: 'Roboto_regular' }}>
                    {item.courseDescription}
                  </Text>
                </View>
              ))
            }
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

export default connect(mapStateToProps)(CDPManualScreen)