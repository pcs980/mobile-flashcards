import React from 'react';
import {Animated, Text, View} from 'react-native';

import styles from '../utils/styles';

class DeckCard extends React.Component {
  state = {
    bounceValue: new Animated.Value(1),
  };

  handleClick = (title) => {
    Animated.sequence([
      Animated.timing(this.state.bounceValue, {duration: 100, toValue: 1.04}),
      Animated.spring(this.state.bounceValue, {toValue: 1, speed: 40, bounciness: 20})
    ]).start(() => this.props.onPress(title));
  };

  render() {
    const {deck} = this.props;
    const {bounceValue} = this.state;

    return (
      <Animated.View style={[styles.shadow, {transform: [{scale: bounceValue}]}]}>
        <Text
          onPress={() => this.handleClick(deck.title)}
          style={[styles.title1, {paddingTop: 20, paddingBottom: 20}]}>
          {deck.title}
        </Text>
        <Text style={styles.subtitle}>
          {
            deck.questions
              ? deck.questions.length + ' cards'
              : 'No cards'
          }
        </Text>
      </Animated.View>
    );
  }
}

export default DeckCard;