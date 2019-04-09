import React from 'react';
import {StatusBar, View} from 'react-native';
import {Constants} from 'expo';

import {primary} from '../utils/colors';

export default function Status() {
  return (
    <View style={{
      backgroundColor: primary,
      height: Constants.statusBarHeight
    }}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={primary}/>
    </View>
  )
}