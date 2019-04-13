import {AsyncStorage} from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export const _getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
};

export const _saveDeck = (deck) => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[deck.title]: deck}));
};

export const _deleteDeck = (deckId) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((result) => {
      const decks = JSON.parse(result);
      decks[deckId] = undefined;
      delete decks[deckId];
      setItem(decks);
    });
};

export const _addCardToDeck = (deckId, card) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((result) => {
      const decks = JSON.parse(result);
      decks[deckId].questions.push(card);
      setItem(decks);
    });
};

const setItem = (decks) => {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
};

/*
Storage layout

{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
*/