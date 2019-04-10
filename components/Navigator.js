import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Tabs from './Tabs';
import DeckDetail from './DeckDetail';
import {primary, white} from '../utils/colors';

const Navigator = createAppContainer(createStackNavigator({
  Home: {
    screen: Tabs,
    path: '/',
    navigationOptions: {
      header: null
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({navigation}) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      }
    }),
  }
}));

export default Navigator;