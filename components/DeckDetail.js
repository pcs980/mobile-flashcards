import React from 'react';
import {Alert, Text, View} from 'react-native';
import {connect} from 'react-redux';

import TextButton from './TextButton';
import {removeDeck} from '../actions';
import {_deleteDeck} from '../utils/api';
import {formatDate} from '../utils';
import styles from '../utils/styles';

class DeckDetail extends React.Component {

  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params;

    return {
      title
    };
  }

  createCard = () => {
    this.props.navigation.navigate('CardNew', {deckId: this.props.deck.title});
  };

  startQuiz = () => {
    this.props.navigation.navigate('Quiz', {deckId: this.props.deck.title});
  }

  confirmDeletion = () => {
    Alert.alert(
      'Remove deck',
      'Are you sure you want to permanently remove this deck?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => this.delete()
        },
      ]
    );
  }

  delete = () => {
    const {deck, deleteDeck, goHome} = this.props;

    _deleteDeck(deck.title)
      .then(() => deleteDeck(deck.title))
      .then(() => goHome());
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }

  render() {
    const {deck} = this.props;
    const cardCount = deck.questions ? deck.questions.length : 0;

    return (
      <View style={styles.container}>
        <Text style={[styles.title2, {fontWeight: 'bold', marginTop: 40}]}>
          This deck has:
        </Text>
        <Text>
          {
            cardCount > 0
              ? deck.questions.length + (deck.questions.length === 1 ? ' card' : ' cards')
              : 'no cards'
          }
        </Text>
        <Text style={[styles.title2, {fontWeight: 'bold', marginTop: 40}]}>
          Last try:
        </Text>
        <Text>
          {
            deck.timestamp
              ? formatDate(deck.timestamp) + '. Scored ' + deck.score
              : 'Not answered yet'
          }
        </Text>
        <TextButton
          outline
          onPress={this.createCard}
          style={{marginTop: 80}}>
          Add Card
        </TextButton>
        {
          cardCount > 0 && (
            <TextButton
              onPress={this.startQuiz}>
              Start Quiz
            </TextButton>
          )
        }
        <TextButton
          danger
          onPress={this.confirmDeletion}>
          Remove Deck
        </TextButton>
      </View>
    );
  }
}

const mapStateToProps = (state, {navigation}) => {
  const {title} = navigation.state.params;

  return {
    deck: state[title],
    goHome: () => navigation.navigate('Home'),
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteDeck: (deckId) => dispatch(removeDeck(deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);