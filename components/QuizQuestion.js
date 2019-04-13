import React from 'react';
import {Text, View} from 'react-native';

import TextButton from './TextButton';
import styles from '../utils/styles';

export default function QuizQuestion({deck, showAnswer, position}) {
  return (
    <View style={styles.containerTop}>
      <Text style={styles.textError}>
        {
          (position + 1) === deck.questions.length && ('Last ')
        }
        Question
      </Text>
      <Text style={styles.title1}>
        {deck.questions[position].question}
      </Text>
      <TextButton
        style={{marginTop: 60}}
        onPress={showAnswer}>
        Show answer
      </TextButton>
    </View>
  );
}