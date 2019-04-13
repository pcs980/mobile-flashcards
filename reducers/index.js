import {
  STORE_ALL_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD
} from '../actions';

const decks = (state = {}, action) => {
  switch (action.type) {
    case STORE_ALL_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck
      };
    default:
      return state;
  }
};

export default decks;