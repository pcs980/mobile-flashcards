import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {getDecks} from '../utils/api';
import styles from '../utils/styles';
import {secondary} from '../utils/colors';

class DeckList extends React.Component {

  state = {
    decks: null,
  }

  componentDidMount() {
    getDecks()
      .then((result) => {
        console.log('getDecks<', result, '>');
        this.setState(() => ({decks: result}));
      });
  }

  render() {
    const {decks} = this.state;

    if (decks === null) {
      return (
        <View style={styles.container}>
          <MaterialCommunityIcons name='cards-outline' size={72} color={secondary}/>
          <Text style={styles.title2}>
            You don't have any decks yet.
          </Text>
          <Text style={styles.title3}>
            Use the tab New Deck to create one.
          </Text>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        {
          decks.map((deck) => <Text>{deck.title}</Text>)
        }
      </View>
    );
  }
}

export default DeckList;