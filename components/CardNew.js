import React from 'react';
import {KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';

import TextButton from './TextButton';
import {storeCard} from '../actions';
import {addCardToDeck} from '../utils/api';
import styles from '../utils/styles';

class CardNew extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const card = {
      deckId: this.props.deckId,
      question: this.state.question,
      answer: this.state.answer
    };
    console.log('param', this.props.navigation.state.params);
    console.log({card});
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.title2}>Question</Text>
        <TextInput
          placeholder="Type the question"
          maxLength={120}
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
          style={styles.textInput}/>
        <Text style={styles.title2}>Answer</Text>
        <TextInput
          placeholder="Type the correct answer"
          maxLength={120}
          value={this.state.answer}
          onSubmitEditing={this.submit}
          onChangeText={(answer) => this.setState({answer})}
          style={styles.textInput}/>
        <TextButton onPress={this.submit}>
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state, {navigation}) => ({
  deckId: navigation.state.params.deckId
});

const mapDispatchToProps = (dispatch) => ({
  storeCard: (deckId, card) => dispatch(storeCard(deckId, card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardNew);