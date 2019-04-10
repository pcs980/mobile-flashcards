import React from 'react';
import {Text, View} from 'react-native';

import Navigator from './components/Navigator';
import Status from './components/Status';

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Status/>
        <Navigator/>
      </View>
    );
  }
}
