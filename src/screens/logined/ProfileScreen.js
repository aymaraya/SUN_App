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


import Menu from './../../components/Menu';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const ProfileScreen = (props) => {
  const image = 'data:image/png;base64,'

  const handleLogOutPress = () => {
    
  }
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: '#4630EB', padding: 30 }}>

          <View style={styles.profileContainer}>

            <Image source={{ uri: image + props.user.studentDetail.photo }} style={styles.thumbnail} />
            <View style={styles.detailsContainer}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}> {props.user.studentDetail.dept} </Text>
              <Text style={{ fontSize: 15, color: '#f2f2f2', textAlign: 'center' }}> {props.user.studentDetail.degreeType}  </Text>
              <TouchableOpacity style={styles.LogoutButton} onPress={handleLogOutPress()}>
                <Text style={{ color: 'white', textAlign: 'center' }}> Log Out </Text>
              </TouchableOpacity>
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

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const mapStateToProps = state => ({
  user: state.userDetails,
  error: state.errorMessage
})

//Map your action creators to your props.
const mapDispatchToProps = {
  
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