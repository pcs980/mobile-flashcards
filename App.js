import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Status from './components/Status';
import {getDecks} from './utils/api';
import {primary, secondary, white} from './utils/colors';

export default class App extends React.Component {

  componentDidMount() {
    getDecks();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Status/>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
