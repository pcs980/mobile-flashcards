export const STORE_ALL_DECKS = 'STORE_ALL_DECKS';
export const ADD_DECK = 'ADD_ENTRY';
export const UPDATE_DECK = 'UPDATE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

export const storeAllDecks = (decks) => ({
  type: STORE_ALL_DECKS,
  decks
});

export const storeDeck = (deck) => ({
  type: ADD_DECK,
  deck
});

export const updateDeck = (deck) => ({
  type: UPDATE_DECK,
  deck,
})

export const removeDeck = (deckId) => ({
  type: REMOVE_DECK,
  deckId
});

export const storeCard = (deckId, card) => ({
  type: ADD_CARD,
  deckId,
  card
});
