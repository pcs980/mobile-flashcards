import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesome} from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

import TextButton from './TextButton';
import {saveDeck} from '../utils/api';
import {updateDeck} from '../actions';
import {lightSecondary} from '../utils/colors';
import styles from '../utils/styles';

class Quiz extends React.Component {

  state = {
    position: 0,
    correct: 0,
    incorrect: 0,
    show: 'question',
  }

  showAnswer = () => {
    this.setState({show: 'answer'});
  };

  countAnswer = (isCorrect) => {
    const {deck} = this.props;

    if ((this.state.position + 1) === deck.questions.length) {
      this.setState((prev) => ({
        correct: prev.correct + (isCorrect === true ? 1 : 0),
        incorrect: prev.incorrect + (isCorrect === true ? 0 : 1),
        show: 'summary',
      }), () => {
        deck.score = ((this.state.correct / deck.questions.length) * 100).toFixed(1) + '%';
        deck.timestamp = Date.now();
        saveDeck(deck)
          .then(() => this.props.changeDeck(deck))
          .catch((error) => console.error('Error updating deck', error));
      });
    } else {
      this.setState((prev) => ({
        correct: prev.correct + (isCorrect === true ? 1 : 0),
        incorrect: prev.incorrect + (isCorrect === true ? 0 : 1),
        position: prev.position + 1,
        show: 'question'
      }));
    }

  };

  restartQuiz = () => {
    this.setState({
      show: 'question',
      position: 0,
      correct: 0,
      incorret: 0,
    })
  };

  render() {
    const {position, correct, incorrect} = this.state;
    const {deck} = this.props;

    if (this.state.show === 'summary') {
      return (
        <View style={styles.containerTop}>
          <FontAwesome name='flag-checkered' size={32}/>
          <Text style={styles.title2}>Quiz finished!</Text>
          <Text style={styles.title3}>Here's your score</Text>
          <Text style={[styles.title1, styles.shadow, {margin: 40}]}>{((correct / deck.questions.length) * 100).toFixed(1)}%</Text>
          <Text style={styles.subtitle}>{correct} correct answers.</Text>
          <Text style={styles.subtitle}>{incorrect} incorrect answers.</Text>
          <TextButton
            onPress={this.restartQuiz}>
            Try again
          </TextButton>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
          <Text style={styles.subtitle}>{`Question ${position + 1} of ${deck.questions.length}`}</Text>
          <Progress.Bar
            progress={(position + 1) / deck.questions.length}
            color={lightSecondary}
            width={null}/>
        </View>
        {
          this.state.show === 'question'
            ? <View style={styles.containerTop}>
                <Text style={styles.textError}>Question</Text>
                <Text style={styles.title1}>
                  {deck.questions[position].question}
                </Text>
                <TextButton
                  style={{marginTop: 60}}
                  onPress={this.showAnswer}>
                  Check answer
                </TextButton>
              </View>
            : <View style={styles.containerTop}>
                <Text style={styles.textError}>Answer</Text>
                <Text style={styles.title1}>
                  {deck.questions[position].answer}
                </Text>
                <TextButton
                  success
                  style={{marginTop: 60}}
                  onPress={() => this.countAnswer(true)}>
                  Correct ({correct})
                </TextButton>
                <TextButton
                  danger
                  onPress={() => this.countAnswer(false)}>
                  Incorrect ({incorrect})
                </TextButton>
              </View>
        }

      </View>
    );
  }
}

const mapStateToProps = (state, {navigation}) => ({
  deck: state[navigation.state.params.deckId]
});

const mapDispatchToProps = (dispatch) => ({
  changeDeck: (deck) => dispatch(updateDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);