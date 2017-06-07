'use strict';
import { takeEvery } from 'redux-saga/effects';
import { login, createAccount} from './user-saga';
import {getCategories, getDecks, getFlashcards, deleteCategory,addCategory, editCategory} from './flashcard-sagas';
import * as types from '../actions/action-types';

export default function* watchRequest() {
    yield takeEvery(types.LOGIN, login);
    yield takeEvery(types.CREATE_ACCOUNT, createAccount);
    yield takeEvery(types.GET_CATEGORIES, getCategories);
    yield takeEvery(types.ADD_CATEGORY, addCategory);
    yield takeEvery(types.EDIT_CATEGORY, editCategory);
    yield takeEvery(types.DELETE_CATEGORY, deleteCategory);
    yield takeEvery(types.GET_DECKS, getDecks);
    yield takeEvery(types.GET_FLASHCARDS, getFlashcards);
}
