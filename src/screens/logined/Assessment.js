import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux';


const AssessmentScreen = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState();

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const result = await axios.get(
          'https://api.sun.edu.ng/api/class-schedule/1113/studentId'
        );
        setSchedule(result.data);

        setLoading(false);
        console.log(schedule)
      } catch (error) {
      }
    };
    getSchedule();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
        ) : (
          <ScrollView style={styles.body}>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>Notifications </Text>
            {console.log(props.user)}
          </ScrollView>
        )
      }

    </SafeAreaView>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userDetails
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 14
  },
  body: {
    flex: 1
  }
})

export default connect(mapStateToProps)(AssessmentScreen)
