import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import TextButton from './TextButton';
import {alertColor, dangerColor, successColor} from '../utils/colors';
import styles from '../utils/styles';

export default function QuizSummary({score, correctCount, incorrectCount, restartQuiz, stopQuiz}) {
  let scoreColor = '';
  switch (true) {
    case (score >= 80):
      scoreColor = successColor;
      break;
    case (score >= 50 && score < 80):
      scoreColor = alertColor;
      break;
    default:
      scoreColor = dangerColor;
      break;
  }

  return (
    <View style={styles.containerTop}>
      <Text style={styles.title2}>
        <FontAwesome name='flag-checkered' size={28}/> Quiz finished!
      </Text>
      <Text style={styles.title3}>Here's your score</Text>
      <Text style={[styles.title1, styles.shadow, {margin: 40, backgroundColor: scoreColor}]}>
        {score}%
      </Text>
      <Text style={styles.subtitle}>{correctCount} correct answers.</Text>
      <Text style={styles.subtitle}>{incorrectCount} incorrect answers.</Text>
      <TextButton
        style={{marginTop: 20}}
        onPress={restartQuiz}>
        Try again
      </TextButton>
      <TextButton
        outline
        onPress={stopQuiz}>
        Back to Deck
      </TextButton>
    </View>
  );
}
