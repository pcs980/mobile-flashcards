import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import DeckCard from './DeckCard';
import Loading from './Loading';
import {storeAllDecks} from '../actions';
import {getDecks} from '../utils/api';
import styles from '../utils/styles';
import {secondary} from '../utils/colors';

class DeckList extends React.Component {

  state = {
    ready: false,
  }

  openDeck = (title) => {
    this.props.navigation.navigate('DeckDetail', {title});
  };

  componentDidMount() {
    getDecks()
      .then((result) => {
        const decks = JSON.parse(result);
        return this.props.storeDecks(decks);
      })
      .then((state) => this.setState(() => ({ready: true})));
  }

  render() {
    const {ready} = this.state;
    const {decks} = this.props;

    if (ready === false) {
      return (
        <Loading/>
      );
    }

    if (!Object.keys(decks).length) {
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
      <ScrollView>
        {
          Object.values(decks).map((deck) => (
            <DeckCard
              key={deck.title}
              onPress={this.openDeck}
              deck={deck}/>
          ))
        }
        <View style={{height: 60}}/>
      </ScrollView>
    );
  }
}

const mapStateToProps = (decks) => ({
  decks,
});

const mapDispatchToProps = (dispatch) => ({
  storeDecks: (decks) => dispatch(storeAllDecks(decks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);