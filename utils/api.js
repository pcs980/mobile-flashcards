import {AsyncStorage} from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((result) => {
      console.log('storage get <', result, '>');
    });
};

export const getDeck = (deckTitle) => {

};

export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[deck.title]: deck}))
};

export const removeDeck = (deckTitle) => {

};

export const addCardToDeck = (card, deckTitle) => {

};

export const removeCardFromDeck = (card, deckTitle) => {

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