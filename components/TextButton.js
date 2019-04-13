import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {secondary, white} from '../utils/colors';

export default function TextButton ({children, onPress, style = {}}) {
  return (
    <TouchableOpacity
      style={[{backgroundColor: secondary, margin: 5, padding: 10, width: 120, borderRadius: 3}, style]}
      onPress={onPress}>
      <Text style={{textAlign: 'center', color: white}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}