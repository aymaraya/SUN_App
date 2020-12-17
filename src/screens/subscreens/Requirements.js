import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

export default Requirements = () => {

  state = {
    contents: [
      {
        title: 'Admission Requirements',
        body: 'Eligibility for admission into Skyline University Nigeria is open to all candidates who possess the required qualification irrespective of race, sex, creed, religion, geographical location and ethnic background or tribe. The admission requirements for entry into undergraduate academic programs are as detailed in subsequent paragraphs. Following are the compulsory requirements for admission into institutions in Nigeria, Candidate must possess five (5) credits in O/Level or its equivalent as required by the Department of interest. Candidates must obtain a minimum of 180 points in Unified Tertiary Matriculation Examination (UTME) and Candidate’s details must have been forwarded to SUN by Joint Admissions and Matriculation Board (JAMB). Admission into full-time undergraduate programs is ONLY gained through Unified Tertiary Matriculation Examination (UTME) and Direct Entry (DE).',
      },
      {
        title: 'Rules',
        body: 'Eligibility for admission into Skyline University Nigeria is open to all candidates who possess the required qualification irrespective of race, sex, creed, religion, geographical location and ethnic background or tribe. The admission requirements for entry into undergraduate academic programs are as detailed in subsequent paragraphs. Following are the compulsory requirements for admission into institutions in Nigeria, Candidate must possess five (5) credits in O/Level or its equivalent as required by the Department of interest. Candidates must obtain a minimum of 180 points in Unified Tertiary Matriculation Examination (UTME) and Candidate’s details must have been forwarded to SUN by Joint Admissions and Matriculation Board (JAMB). Admission into full-time undergraduate programs is ONLY gained through Unified Tertiary Matriculation Examination (UTME) and Direct Entry (DE).',
      }
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ alignSelf: 'stretch' }}>

        <View style={{ paddingTop: 15 }}>
          <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            invisibleImage={IC_ARR_DOWN}
            visibleImage={IC_ARR_UP}
            header={
              <View >
                <Text style={{
                  fontSize: 15,
                  color: '#007AFF',
                  fontWeight: '500',
                }}>Admission Requirements</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt,
              {
                fontSize: 14,
                lineHeight: 30
              }
            ]}>
              Eligibility for admission into Skyline University Nigeria is open to all candidates who possess the required qualification irrespective of race, sex, creed, religion, geographical location and ethnic background or tribe. The admission requirements for entry into undergraduate academic programs are as detailed in subsequent paragraphs. Following are the compulsory requirements for admission into institutions in Nigeria, Candidate must possess five (5) credits in O/Level or its equivalent as required by the Department of interest. Candidates must obtain a minimum of 180 points in Unified Tertiary Matriculation Examination (UTME) and Candidate’s details must have been forwarded to SUN by Joint Admissions and Matriculation Board (JAMB). Admission into full-time undergraduate programs is ONLY gained through Unified Tertiary Matriculation Examination (UTME) and Direct Entry (DE).
              </Text>
          </DropDownItem>
        </View>

        <View style={{ paddingTop: 15 }}>
          <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            invisibleImage={IC_ARR_DOWN}
            visibleImage={IC_ARR_UP}
            header={
              <View >
                <Text style={{
                  fontSize: 15,
                  color: '#007AFF',
                  fontWeight: '500',
                }}>Registration Requirements</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt,
              {
                fontSize: 14,
                lineHeight: 30
              }
            ]}>
              The authenticity of documents submitted is the sole responsibility of student, failure to adhere will lead to cancellation of admission during the tenure of study as well as withdrawal of degree (post-graduation), with no responsibility of university to issue documents/transcripts and/or refund of fees. Prospective student is required to submit attested documents for the completion of the admission as per the below provided list: {'\n'} {'\n'}
                a. Local Candidate Application: Local candidate admission student needs to do the following documentation {'\n'}
                1. Passport copy (Minimum 6 Months Validity) {'\n'}
                2. Passport Sized photograph {'\n'}
                3. National Photo ID (Either one of the valid proofs): Driving License, National ID, Voters Card. {'\n'}
                4. Post UME Result {'\n'}
                5. JAMB Result {'\n'}
                6. High School: WAEC(Online Verification), NECO (Online Verification), NABTEB, NBAIS, IGCSE, GCE, GCSE O-Level Attested Certificate (for Fresh Admissions – Level 100). {'\n'}
                7. Students Certificate Authenticity Check Form {'\n'}{'\n'}

                b. International Student Application

                1. International admission student needs to do the following documentation
                i) Passport copy (Minimum 6 Months Validity)
                ii) Passport Sized photograph
                iii) Visa Copy (where applicable – at least valid for 6 months)
                iv) National Photo ID (Either one of the valid proofs): {'\n'}{'\n'}

                a) Green Card (where applicable)
                b) National ID
                c) Driving License
                2. Post UME Result
                3. JAMB ID
                4. High School : {'\n'}{'\n'}

                i) WAEC (Where Applicable, Online Verification)
ii) IGCSE, GCE, GCSE O-Level Attested Certificate (for Fresh Admissions – Level 100)
iii) Minimum of in CBSE {'\n'}{'\n'}

5. Students Certificate Authenticity Check Form
              </Text>

          </DropDownItem>
        </View>

        <View style={{ height: 96 }} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5
  }
})