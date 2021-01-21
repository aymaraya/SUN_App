import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Menu from '../components/Menu';

export default HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Image
        source={require('../../assets/images/logo_col.png')}
        style={styles.logo}
        resizeMode='contain'
      />

      <View style={styles.menuContainer}>
        <Menu 
          color1='#01dd9b' 
          color2='#14bb9d'             
          iconSrc={require('../../assets/images/menu/admission.png')}
          text='Admission'
          to='Admission'
        />
        <Menu 
          color1='#fc6d93' 
          color2='#d3359e'             
          iconSrc={require('../../assets/images/menu/programs.png')}
          text='Programs'
          to="Programs"
        />
        <Menu 
          color1='#8057fc' 
          color2='#5d4fed'             
          iconSrc={require('../../assets/images/menu/test.png')}
          text='Aptitude Test'
          to="Test"
        />
        <Menu 
          color1='#fb831c' 
          color2='#f1264f'             
          iconSrc={require('../../assets/images/menu/news.png')}
          text='News & Events'
          to="News"
        />
        <Menu 
          color1='#00c4c6' 
          color2='#069ec3'             
          iconSrc={require('../../assets/images/menu/map.png')}
          text='Maps & Directions'
          to="Map"
        />
        <Menu 
          color1='#25446c' 
          color2='#003067'             
          iconSrc={require('../../assets/images/menu/tour.png')}
          text='Virtual Tour'
          to="Tour"
        />
        <Menu 
          color1='#fe4843' 
          color2='#db0a6c'             
          iconSrc={require('../../assets/images/menu/about.png')}
          text='About Us'
          to="About"
        />
        <Menu 
          color1='#2874e2' 
          color2='#5b49e4'             
          iconSrc={require('../../assets/images/menu/login.png')}
          text='Login'
          to='Login'
        />
      </View> 
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  logo: {
    width: '60%',
    alignSelf: 'center',
    marginTop: 6
  },

  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignContent: 'flex-start',
    marginHorizontal: '4%',
    marginBottom: '6%'
  }
});