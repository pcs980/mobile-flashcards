import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import CardNew from './CardNew';
import DeckDetail from './DeckDetail';
import Tabs from './Tabs';
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
  },
  CardNew: {
    screen: CardNew,
    navigationOptions: ({navigation}) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      }
    }),
  }
}));

export default Navigator;