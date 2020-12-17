import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import Menu from './../../components/Menu';
import LogoutButton from './../../components/LogoutButton';


import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import {
  Icon
} from 'react-native-elements'
import axios from 'axios';

export default ProfileScreen = ({ navigation }) => {

  const studentId = navigation.getParam('id');

  const [isLoading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState();

  const url = `http://api.sun.edu.ng/api/student-detail/${studentId}/studentId `

  useEffect(() => {
    const getStudentData = async () => {
      try {
        const result = await axios.get(
          url
        );
        setStudentData(result.data);
        setLoading(false);
      } catch (error) {
      }
    };
    getStudentData();
  }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: '#4630EB', padding: 30 }}>

          <View style={styles.profileContainer}>

            <Image source={require('../../../assets/images/person.jpg')} style={styles.thumbnail} />
            <View style={styles.detailsContainer}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}> Miss. FADHILA MAHDI JIBIR </Text>
              <Text style={{ color: '#f2f2f2' }}> CSC - BC. COMPUTER SCIENCE  </Text>
            </View>

          </View>

        </View>
        <View style={styles.menuContainer}>
          <Menu
            color1='#01dd9b'
            color2='#14bb9d'
            iconSrc={require('../../../assets/images/menu/about.png')}
            text='My Data'
            to='Schedule' />
          <Menu
            color1='#25446c'
            color2='#003067'
            iconSrc={require('../../../assets/images/menu/tour.png')}
            text='Course Info'
            to="Attendance" />
          <Menu
            color1='#00c4c6'
            color2='#069ec3'
            iconSrc={require('../../../assets/images/menu/map.png')}
            text='E-request'
            to="Map" />
          <Menu
            color1='#8057fc'
            color2='#5d4fed'
            iconSrc={require('../../../assets/images/menu/test.png')}
            text='CDP Manual'
            to="Test" />
          <LogoutButton
            color1='#fe4843' 
            color2='#db0a6c' 
            text='Logout' 
            to="Login"/>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  profileContainer: {
    flexDirection: 'column',
    padding: 15,
    alignItems: 'center'
  },
  detailsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 144,
    height: 144,
    resizeMode: 'cover',
    borderRadius: 90
  },
  menuContainer: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignContent: 'flex-start',
  }
})