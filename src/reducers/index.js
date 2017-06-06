'use strict';
import users from './user-reducers';
import flashcards from './flashcard-reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  users,flashcards
});

export default rootReducer;
