import React from 'react';
import {KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';

import TextButton from './TextButton';
import Loading from './Loading';
import {storeCard} from '../actions';
import {_addCardToDeck} from '../utils/api';
import styles from '../utils/styles';

class CardNew extends React.Component {

  state = {
    saving: false,
    question: '',
    answer: '',
    questionError: false,
    answerError: false,
  }

  submit = () => {
    // Exit if a saving call is already running
    if (this.state.saving === true) return;

    const deckId = this.props.deckId;
    const card = {
      question: this.state.question.trim(),
      answer: this.state.answer.trim()
    };

    const questionError = card.question.length === 0;
    const answerError = card.answer.length === 0;
    if (questionError === true || answerError === true) {
      this.setState(() => ({questionError, answerError}));
    } else {
      // Start saving, then add card to deck in AsyncStorage and Redux store
      // After all go back to DeckDetail
      this.setState({saving: true}, () => {
        console.log({card});
        _addCardToDeck(deckId, card)
          .then(() => this.props.storeCard(deckId, card))
          .then(() => this.props.goBack())
          .catch((error) => {
            console.error('adding card error', error);
            this.setState({saving: false});
          });
      });
    }
  };

  render() {
    const {question, questionError, answer, answerError} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.title2}>Question</Text>
        <TextInput
          ref={(input) => {this.inputQuestion = input}}
          placeholder="Type the question"
          maxLength={120}
          value={question}
          returnKeyType='next'
          onSubmitEditing={() => {this.inputAnswer.focus()}}
          onChangeText={(question) => this.setState({question})}
          style={styles.textInput}/>
        {
          questionError === true && (
            <Text style={styles.textError}>
              Please, inform a question.
            </Text>
          )
        }

        <Text style={styles.title2}>Answer</Text>
        <TextInput
          ref={(input) => {this.inputAnswer = input}}
          placeholder="Type the correct answer"
          maxLength={120}
          value={answer}
          onSubmitEditing={this.submit}
          onChangeText={(answer) => this.setState({answer})}
          style={styles.textInput}/>
        {
          answerError === true && (
            <Text style={styles.textError}>
              Please, inform the correct answer.
            </Text>
          )
        }

        {
          // Hide submit button when a saving is in progress
          this.state.saving === false
            ? <TextButton onPress={this.submit} style={{marginTop: 60}}>
                Submit
              </TextButton>
            : <Loading/>
        }
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state, {navigation}) => ({
  deckId: navigation.state.params.deckId,
  goBack: () => navigation.goBack(),
});

const mapDispatchToProps = (dispatch) => ({
  storeCard: (deckId, card) => dispatch(storeCard(deckId, card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardNew);