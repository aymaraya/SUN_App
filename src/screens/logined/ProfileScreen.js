import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from './../../../store';

import Menu from './../../components/Menu';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProfileScreen = (props) => {
  const image = 'data:image/png;base64,'

  const photo = image + props.user.photo
  const name = props.user.studentName;
  const course = props.user.course;

  const [screens, setScreens] = useState([
    {
      'color1': '#01dd9b',
      'color2': '#14bb9d',
      'iconSrc': '"../../../assets/images/menu/data.png"',
      'text': 'My Data',
      'to': 'My Data'
    },
    {
      'color1': '#25446c',
      'color2': '#003067',
      'iconSrc': '"../../../assets/images/menu/course.png"',
      'text': 'Course Info',
      'to': 'Course Info'
    },
    {
      'color1': '#00c4c6',
      'color2': '#069ec3',
      'iconSrc': '"../../../assets/images/menu/request.png"',
      'text': 'E-request',
      'to': 'E Request'
    },
    {
      'color1': '#8057fc',
      'color2': '#5d4fed',
      'iconSrc': '"../../../assets/images/menu/appointment.png"',
      'text': 'Appointment',
      'to': 'Appointment'
    },
    {
      'color1': '#ff8c00',
      'color2': '#911f00',
      'iconSrc': '"../../../assets/images/menu/complaint.png"',
      'text': 'Complaint',
      'to': 'Complaint'
    },
    {
      'color1': '#2414ff',
      'color2': '#9514ff',
      'iconSrc': '"../../../assets/images/menu/programs.png"',
      'text': 'Fee',
      'to': 'Fee'
    },
  ])

  return (

    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#d55154', padding: 18 }}>

        <View style={styles.profileContainer}>

          <Image source={{ uri: photo }} style={styles.thumbnail} />

          <View style={styles.detailsContainer}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', fontFamily: 'Roboto_medium' }}> {name} </Text>
            <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'Roboto_regular' }}> {course} </Text>
            <TouchableOpacity style={styles.LogoutButton} onPress={() => { props.logoutUser() }}>
              <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Roboto_medium' }}> Log Out </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <ScrollView style={{paddingHorizontal: 14, marginTop: 14}}>
        <View style={styles.menus}>
          <Menu
            color1='#01dd9b'
            color2='#14bb9d'
            iconSrc={require('../../../assets/images/menu/data.png')}
            text='My Data'
            to='My Data' />
          <Menu
            color1='#25446c'
            color2='#003067'
            iconSrc={require('../../../assets/images/menu/course.png')}
            text='Course Info'
            to="Course Info" />
        </View>
        <View style={styles.menus}>
          <Menu
            color1='#00c4c6'
            color2='#069ec3'
            iconSrc={require('../../../assets/images/menu/request.png')}
            text='E-request'
            to="E Request" />
          <Menu
            color1='#8057fc'
            color2='#5d4fed'
            iconSrc={require('../../../assets/images/menu/manual.png')}
            text='Faculty'
            to="CDP Manual" />
        </View>
        <View  style={styles.menus}>
          <Menu
            color1='#0a4f3c'
            color2='#4f0a40'
            iconSrc={require('../../../assets/images/menu/appointment.png')}
            text='Appointment'
            to="Appointment" />

          <Menu
            color1='#ff8c00'
            color2='#911f00'
            iconSrc={require('../../../assets/images/menu/complaint.png')}
            text='Complaint'
            to="Complaint" />
        </View>
        <View style={styles.menus}>
          <Menu
            color1='#2414ff'
            color2='#9514ff'
            iconSrc={require('../../../assets/images/menu/programs.png')}
            text='Fee'
            to="Fee" />
          <Menu
            color1='rgba(255, 165, 0, 0)'
            color2='rgba(255, 165, 0, 0)'
            to="Profile"
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  user: state.userDetails,
  isAuthenticated: state.isAuthenticated
})

//Map your action creators to your props.
const mapDispatchToProps = {
  logoutUser
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  detailsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 90
  },
  menus: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  LogoutButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    backgroundColor: '#b70000'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)