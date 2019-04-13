import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import TextButton from './TextButton';
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
            deck.lastQuiz
              ? deck.lastQuiz
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
      </View>
    );
  }
}

const mapStateToProps = (state, {navigation}) => {
  const {title} = navigation.state.params;

  return {
    deck: state[title]
  };
};

export default connect(mapStateToProps)(DeckDetail);