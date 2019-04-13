import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {dangerColor, secondary, successColor, white} from '../utils/colors';

export default function TextButton ({children, onPress, outline = false, danger = false, success = false, style = {}}) {
  const colors = {};
  if (outline === true) {
    colors.borderWidth = 2,
    colors.borderColor = secondary
  }

  colors.backgroundColor = outline === true ? white : secondary;
  if (danger === true) {
    colors.backgroundColor = dangerColor;
  }
  if (success === true) {
    colors.backgroundColor = successColor;
  }

  return (
    <TouchableOpacity
      style={[{
          ...colors,
          margin: 5,
          padding: 10,
          width: 120,
          borderRadius: 3,
        }, style]}
      onPress={onPress}>
      <Text style={{textAlign: 'center', color: outline ? secondary : white}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}