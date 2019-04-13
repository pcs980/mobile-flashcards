import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {secondary, white} from '../utils/colors';

export default function TextButton ({children, onPress, outline, style = {}}) {
  return (
    <TouchableOpacity
      style={[{
          backgroundColor: outline ? white : secondary, margin: 5,
          padding: 10,
          width: 120,
          borderRadius: 3,
          borderWidth: 2,
          borderColor: secondary
        }, style]}
      onPress={onPress}>
      <Text style={{textAlign: 'center', color: outline ? secondary : white}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}