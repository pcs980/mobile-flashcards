import React from 'react';
import {StatusBar, View} from 'react-native';
import {Constants} from 'expo';

import {darkPrimary} from '../utils/colors';

export default function Status() {
  return (
    <View style={{
      backgroundColor: darkPrimary,
      height: Constants.statusBarHeight
    }}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={darkPrimary}/>
    </View>
  )
}