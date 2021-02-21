import React, { Component } from 'react';

import {
  Container,
  Header,
  Tab,
  Tabs,
  Title,
  Body
} from 'native-base';
import Assessment from './Assessment';
import Results from './Results';

const ResultScreen = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title> Result</Title>
        </Body>
      </Header>

      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#007AFF' }}>
        <Tab heading="Assessment"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
          <Assessment />
        </Tab>

        <Tab heading="Results"
          tabStyle={{ backgroundColor: '#fff' }}
          textStyle={{ color: 'black' }}
          activeTabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
          <Results />
        </Tab>
      </Tabs>
    </Container>

  );
}

export default (ResultScreen);