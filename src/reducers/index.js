'use strict';
import users from './user-reducers';
import flashcards from './flashcard-reducers';
import decks from './deck-reducers';
import categories from './category-reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  users,flashcards,decks,categories
});

export default rootReducer;
