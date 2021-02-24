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
  const [levels, setLevels] = useState();
  const [levelLoading, setLevelLoading] = useState(false);
  const [level, setLevel] = useState('');
  const [fees, setFees] = useState();
  const [showFee, setShowFee] = useState(false);


  useEffect(() => {
    const getSemesters = async () => {
      try {
        await axios({
          method: 'get',
          url: 'https://api.sun.edu.ng/api/fee/academic-level',
        })
          .then(response => {
            setLevels(response.data);
            setLoading(false);
            console.log(levels)
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

  const loadFee = async () => {
    try {
      setLevelLoading(true)
      await axios({
        method: 'get',
        url: 'https://api.sun.edu.ng/api/fee/' + Number(props.user.studentId) + '/studentId/' + level + '/level',
        data: {
          'studentId': Number(props.user.studentId),
          'level': level
        }
      })
        .then(response => {
          setLevelLoading(false)
          setFees(response.data)
          console.log(fees)
          setShowFee(true)
        })
        .catch(err => {
          alert(err)
          setLevelLoading(false)
        })
    } catch (error) {
      alert(error)
      setLevelLoading(false)
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
          <Title>Fee </Title>
        </Body>
        <Right />
      </Header>
      { !isLoading && !levelLoading ? (
        !showFee ? (
          <ScrollView style={{ margin: 14 }}>
            {
              levels.map((item, key) => (
                <TouchableOpacity key={key} style={{ paddingVertical: 12, borderTopWidth: 0.3 }} onPress={() => { setLevel(item.level); loadFee(); }}>
                  <Text> {item.desc} </Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        ) : (
            <View style={{ paddingHorizontal: 14 }}>
              <Text style={{ fontSize: 18, fontFamily: 'Roboto_medium', marginVertical: 18, textAlign: 'center' }}> {level} </Text>
              <View style={{ paddingVertical: 6, paddingHorizontal: 8, flexDirection: 'row', alignSelf: 'center', borderWidth: 0.5, alignItems: 'center' }}>
                <Text style={{ flex: 2, fontFamily: 'Roboto_bold' }}> Fee Item </Text>
                <Text style={styles.cellHead}> Level </Text>
                <Text style={styles.cellHead}> Period </Text>
                <Text style={styles.cellHead}> Fees </Text>
                <Text style={styles.cellHead}> VAT </Text>
                <Text style={styles.cellHead}> VAT Amount </Text>

              </View>
              {fees.map((item, key) => (
                <View key={key} style={{ paddingVertical: 6, paddingHorizontal: 8, flexDirection: 'row', alignSelf: 'center', alignItems: 'center',borderWidth: 0.3 }}>
                  <Text style={{ flex: 2, fontFamily: 'Roboto_regular',  }}>{item.feeItem} </Text>
                  <Text style={styles.cell}>{item.level} </Text>
                  <Text style={styles.cell}>{item.period} </Text>
                  <Text style={styles.cell}>{item.totolFees} </Text>
                  <Text style={styles.cell}>{item.vat} </Text>
                  <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Roboto_medium' }}> {item.vatAmount} </Text>
                </View>
              ))}

              <TouchableOpacity
                style={{ marginVertical: 24, paddingHorizontal: 14, paddingVertical: 8, backgroundColor: '#ff2929', borderRadius: 6 }}
                onPress={() => setShowFee(false)}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}> Go back </Text>
              </TouchableOpacity>
            </View>
          )
      ) :
        (
          <ActivityIndicator size='large' style={{ marginTop: 5 }} />
        )
      }
    </Container >
  )
}

const styles = StyleSheet.create({
  cellHead: { 
    flex: 1, 
    textAlign: 'center', 
    fontFamily: 'Roboto_medium', 
    marginHorizontal: 3 
  },
  cell: { 
    flex: 1, 
    textAlign: 'center', 
    fontFamily: 'Roboto_regular', 
    marginHorizontal: 4 
  }
})
const mapStateToProps = state => ({
  user: state.userDetails
})

export default connect(mapStateToProps)(FeeScreen)
