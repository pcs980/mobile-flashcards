import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import CardNew from './CardNew';
import DeckDetail from './DeckDetail';
import Tabs from './Tabs';
import Quiz from './Quiz';
import {primary, white} from '../utils/colors';

// Common NavigationOptions
const navigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: primary
  }
};

const Navigator = createAppContainer(createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
  CardNew: {
    screen: CardNew,
    navigationOptions: ({navigation}) => ({
      title: 'Add Card',
      ...navigationOptions,
    }),
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({navigation}) => ({
      ...navigationOptions,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: 'Quiz',
      ...navigationOptions,
    })
  }
}));

export default Navigator;