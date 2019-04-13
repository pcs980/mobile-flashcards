import {
  STORE_ALL_DECKS,
  ADD_DECK,
  UPDATE_DECK,
  REMOVE_DECK,
  ADD_CARD,
} from '../actions';

const decks = (state = {}, action) => {
  switch (action.type) {
    case STORE_ALL_DECKS: {
      return {
        ...state,
        ...action.decks
      };
    }
    case ADD_DECK: {
      return {
        ...state,
        [action.deck.title]: action.deck
      };
    }
    case UPDATE_DECK: {
      const {deck} = action;

      return {
        ...state,
        [deck.title]: {
          ...deck
        }
      };
    }
    case REMOVE_DECK: {
      const decks = state;
      decks[action.deckId] = undefined;
      delete decks[action.deckId];

      return {
        ...decks
      };
    }
    case ADD_CARD: {
      const {deckId, card} = action;
      const deck = state[deckId];

      deck.questions.push(card);
      return {
        ...state,
        [deckId]: {
          ...deck
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default decks;