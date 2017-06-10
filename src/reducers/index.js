'use strict';
import users from './user-reducers';
import flashcards from './flashcard-reducers';
import decks from './deck-reducers';
import categories from './category-reducers';
import {combineReducers} from 'redux';
import traverse from './traverse-reducers';
import study from './study-reducers';

const rootReducer = combineReducers({
  users,flashcards,decks,categories,traverse,study
});

export default rootReducer;
