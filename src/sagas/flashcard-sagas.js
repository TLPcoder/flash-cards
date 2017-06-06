'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/action-types';

export function * getCategories({payload}) {
    const {method, url} = payload;
    const config = {
        method,
        url,
    };

    try {
        const data = yield call(axios,config);
        yield put({type: types.GET_CATEGORIES_SUCCESS, data});
    } catch (error) {
        yield put({type: types.GET_CATEGORIES_FAIL, error});
    }
}

export function * getDecks({payload}) {
    const {method, url} = payload;
    const config = {
        method,
        url,
    };

    try {
        const data = yield call(axios,config);
        yield put({type: types.GET_DECKS_SUCCESS, data});
    } catch (error) {
        yield put({type: types.GET_DECKS_FAIL, error});
    }
}

export function * getFlashcards({payload}) {
    const {method, url} = payload;
    const config = {
        method,
        url,
    };

    try {
        const data = yield call(axios,config);
        yield put({type: types.GET_FLASHCARDS_SUCCESS, data});
    } catch (error) {
        yield put({type: types.GET_FLASHCARDS_FAIL, error});
    }
}