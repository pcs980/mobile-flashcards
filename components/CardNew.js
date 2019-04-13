import React from 'react';
import {ActivityIndicator, KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';

import TextButton from './TextButton';
import {storeCard} from '../actions';
import {addCardToDeck} from '../utils/api';
import styles from '../utils/styles';

class CardNew extends React.Component {

  state = {
    saving: false,
    question: 'Uma nova pergunta',
    answer: 'Outra chance de responder',
    questionError: false,
    answerError: false,
  }

  submit = () => {
    if (this.state.saving === true) return;

    const deckId = this.props.deckId;
    const card = {
      question: this.state.question.trim(),
      answer: this.state.answer.trim()
    };

    const questionError = card.question.length < 10;
    const answerError = card.answer.length < 10;
    if (questionError === true || answerError === true) {
      this.setState(() => ({questionError, answerError}));
      return;
    } else {
      this.setState({saving: true},
        () => {
          console.log({card});
          addCardToDeck(deckId, card)
            .then(() => this.props.storeCard(deckId, card))
            .then(() => this.props.goBack())
            .catch((error) => {
              console.error(error);
              this.setState({saving: false});
            });
        }
      );
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
              Please, inform a question with at least 10 characters.
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
              Please, inform an answer with at least 10 characters.
            </Text>
          )
        }

        <TextButton onPress={this.submit} style={{marginTop: 60}} disabled={this.state.saving}>
          Submit
        </TextButton>
        {
          this.state.saving === true && (
            <ActivityIndicator/>
          )
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