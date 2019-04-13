import React from 'react';
import {Text, View} from 'react-native';

import TextButton from './TextButton';
import styles from '../utils/styles';

export default function QuizAnswer({deck, countAnswer, position}) {
  return (
    <View style={styles.containerTop}>
      <Text style={styles.textError}>Answer</Text>
      <Text style={styles.title1}>
        {deck.questions[position].answer}
      </Text>
      <TextButton
        success
        style={{marginTop: 60}}
        onPress={() => countAnswer(true)}>
        Correct
      </TextButton>
      <TextButton
        danger
        onPress={() => countAnswer(false)}>
        Incorrect
      </TextButton>
    </View>
  );
}