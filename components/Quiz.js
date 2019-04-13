import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesome} from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

import TextButton from './TextButton';
import QuizAnswer from './QuizAnswer';
import QuizQuestion from './QuizQuestion';
import QuizSummary from './QuizSummary';
import {_saveDeck} from '../utils/api';
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
        _saveDeck(deck)
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
      incorrect: 0,
    })
  };

  stopQuiz = () => {
    this.props.goBack();
  }

  render() {
    const {position, correct, incorrect, show} = this.state;
    const {deck} = this.props;

    if (show === 'summary') {
      return (
        <QuizSummary
          score={((correct / deck.questions.length) * 100).toFixed(1)}
          correctCount={correct}
          incorrectCount={incorrect}
          restartQuiz={this.restartQuiz}
          stopQuiz={this.stopQuiz}/>
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
          show === 'question'
            ? <QuizQuestion
                deck={deck}
                position={position}
                showAnswer={this.showAnswer}/>
            : <QuizAnswer
                position={position}
                deck={deck}
                countAnswer={this.countAnswer}/>
        }

      </View>
    );
  }
}

const mapStateToProps = (state, {navigation}) => ({
  deck: state[navigation.state.params.deckId],
  goBack: () => navigation.goBack(),
});

const mapDispatchToProps = (dispatch) => ({
  changeDeck: (deck) => dispatch(updateDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);