import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from './../../../store';

import Menu from './../../components/Menu';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const ProfileScreen = (props) => {
  const image = 'data:image/png;base64,'


  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: '#4630EB', padding: 30 }}>

          <View style={styles.profileContainer}>

            <Image source={{ uri: image + props.user.studentDetail.photo }} style={styles.thumbnail} />

            <View style={styles.detailsContainer}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}> {props.user.studentDetail.dept} </Text>
              <Text style={{ fontSize: 15, color: '#f2f2f2', textAlign: 'center' }}>  </Text>
              <TouchableOpacity style={styles.LogoutButton} onPress={() => { props.logoutUser() }}>
                <Text style={{ color: 'white', textAlign: 'center' }}> Log Out </Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
        <View style={styles.menuContainer}>
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
            text='CDP Manual'
            to="CDP Manual" />

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

      </SafeAreaView>
    </SafeAreaProvider>
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
  },
  LogoutButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: 'red'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)