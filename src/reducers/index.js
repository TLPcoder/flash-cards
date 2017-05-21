'use strict';
import people from './people-reducer.js';
import users from './user-reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people, users
});

export default rootReducer;
