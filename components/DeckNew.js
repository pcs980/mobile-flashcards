import React from 'react';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';

import Loading from './Loading';
import TextButton from './TextButton';
import {storeDeck} from '../actions';
import {_saveDeck} from '../utils/api';
import styles from '../utils/styles';

class DeckNew extends React.Component {
  state = {
    saving: false,
    title: '',
    titleError: false,
  }

  openDeck = (title) => {
    this.props.navigation.navigate('DeckDetail', {title});
  };

  submit = () => {
    if (this.state.saving === true) return;

    const deck = {
      title: this.state.title.trim(),
      questions: [],
    }

    const titleError = deck.title.length === 0;

    if (titleError === true) {
      this.setState(() => ({titleError}));
    } else {
      this.setState({saving: true}, () => {
        _saveDeck(deck)
          .then(() => this.props.addDeck(deck))
          .then(() => {
            this.setState({title: '', saving: false, titleError: false});
            this.openDeck(deck.title)
          })
          .catch((error) => {
            console.error('save deck error:', error);
              this.setState({saving: false});
          });
        });
    }

  };

  render() {
    const {title, titleError, saving} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.title2}>What is the title of your new deck?</Text>
        <TextInput
          placeholder="Type your new deck's title"
          maxLength={30}
          value={title}
          onSubmitEditing={this.submit}
          onChangeText={(title) => this.setState({title})}
          style={styles.textInput}/>
        {
          titleError === true && (
            <Text style={styles.textError}>
              Please, inform a title.
            </Text>
          )
        }
        {
          saving === false
            ? <TextButton onPress={this.submit}>
                Create Deck
              </TextButton>
            : <Loading/>
        }
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck) => dispatch(storeDeck(deck)),
});

export default connect(null, mapDispatchToProps)(DeckNew);