import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import TextButton from './TextButton';
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

  countAnswer = (correct) => {
    this.setState((prev) => ({
      correct: prev.correct + (correct === true ? 1 : 0),
      incorrect: prev.incorrect + (correct === true ? 0 : 1),
      position: prev.position + 1,
      show: 'question'
    }));
  };

  render() {
    const {position} = this.state;
    const {deck} = this.props;
    console.log({deck});

    return (
      <View style={{flex: 1}}>
        <Text style={styles.subtitle}>{`Question ${position + 1} of ${deck.questions.length}`}</Text>
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
                  Correct ({this.state.correct})
                </TextButton>
                <TextButton
                  danger
                  onPress={() => this.countAnswer(false)}>
                  Incorrect ({this.state.incorrect})
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

export default connect(mapStateToProps)(Quiz);