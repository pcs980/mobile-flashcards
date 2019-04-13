import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {secondary} from '../utils/colors';

export default function Loading() {
  return (
    <View style={{flex: 1, marginTop: 60}}>
      <ActivityIndicator size='large' color={secondary}/>
    </View>
  );
}