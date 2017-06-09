'use strict';
import users from './user-reducers';
import flashcards from './flashcard-reducers';
import decks from './deck-reducers';
import categories from './category-reducers';
import {combineReducers} from 'redux';
import traverse from './traverse-reducers';

const rootReducer = combineReducers({
  users,flashcards,decks,categories,traverse
});

export default rootReducer;
