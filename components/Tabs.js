import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';

import {lightPrimary, primary, white} from '../utils/colors';

import DeckList from './DeckList';
import DeckNew from './DeckNew';

const router = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards-outline' size={25} color={tintColor}/>
    },
  },
  DeckNew: {
    screen: DeckNew,
    navigationOptions: {
      tabBarLabel: 'New deck',
      tabBarIcon: ({tintColor}) => <Entypo name='new-message' size={25} color={tintColor}/>
    }
  },
};

const navigationOptions = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    showIcon: true,
    activeTintColor: white,
    inactiveTintColor: lightPrimary,
    style: {
      padding: 10,
      height: Platform.OS === 'ios' ? 60 : 'auto',
      fontSize: 18,
      backgroundColor: primary,
      shadowColor: 'rga(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpactity: 1,
    },
  },
};

const Tabs = Platform.OS === 'ios'
  ? createBottomTabNavigator(router, navigationOptions)
  : createMaterialTopTabNavigator(router, navigationOptions);

export default Tabs;