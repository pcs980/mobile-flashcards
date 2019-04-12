import React from 'react';
import {Text, View} from 'react-native';

import styles from '../utils/styles';

export default function DeckCard({deck}) {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Text style={styles.title1}>{deck.title}</Text>
      <Text style={styles.subtitle}>
        {
          deck.questions
            ? deck.questions.length + ' cards'
            : 'No cards'
        }
      </Text>
    </View>
  );
}
