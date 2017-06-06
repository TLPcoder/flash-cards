'use strict';
import { takeEvery } from 'redux-saga/effects';
import { login, createAccount} from './user-saga';
import {getCategories} from './flashcard-sagas';
import * as types from '../actions/action-types';

export default function* watchRequest() {
    console.log('watcher');
    yield takeEvery(types.LOGIN, login);
    yield takeEvery(types.CREATE_ACCOUNT, createAccount);
    yield takeEvery(types.GET_CATEGORIES, getCategories);
}
