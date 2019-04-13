import React from 'react';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';

import TextButton from './TextButton';
import {storeDeck} from '../actions';
import {saveDeck} from '../utils/api';
import styles from '../utils/styles';

class DeckNew extends React.Component {
  state = {
    title: ''
  }

  openDeck = (title) => {
    this.props.navigation.navigate('DeckDetail', {title});
  };

  submit = () => {
    const {title} = this.state;
    saveDeck({title})
      .then(() => this.props.addDeck({title}))
      .then(() => this.openDeck(title))
      .catch((error) => {
        console.error('save deck error:', error);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.title2}>What is the title of your new deck?</Text>
        <TextInput
          placeholder="Type your new deck's title"
          maxLength={40}
          value={this.state.title}
          onSubmitEditing={this.submit}
          onChangeText={(title) => this.setState({title})}
          style={styles.textInput}/>
        <TextButton onPress={this.submit}>
          Submit
        </TextButton>
        <View style={{height: 40}}/>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck) => dispatch(storeDeck(deck)),
});

export default connect(null, mapDispatchToProps)(DeckNew);