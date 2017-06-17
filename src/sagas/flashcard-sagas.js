'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/action-types';

export function * getCategories({payload}) {
    const config = {
        method:'GET',
        url:payload
    };

    try {
        const data = yield call(axios, config);
        yield put({type: types.GET_CATEGORIES_SUCCESS, data});
    } catch (error) {
        yield put({type: types.GET_CATEGORIES_FAIL, error});
    }
}

export function * getDecks({payload}) {
    const config = {
        method:'GET',
        url:payload
    };

    try {
        const data = yield call(axios, config);
        yield put({type: types.GET_DECKS_SUCCESS, data});
    } catch (error) {
        yield put({type: types.GET_DECKS_FAIL, error});
    }
}

export function * getFlashcards({payload}) {
    const config = {
        method:'GET',
        url:payload
    };

    try {
        const data = yield call(axios, config);
        yield put({type: types.GET_FLASHCARDS_SUCCESS, data});
    } catch (error) {
        yield put({type: types.GET_FLASHCARDS_FAIL, error});
    }
}

export function * deleteCategory({payload}) {
    const config = {
        method:'DELETE',
        url:'https://cyber-flash-backend.herokuapp.com/flashcards/delete_category/',
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.DELETE_CATEGORY_SUCCESS, data});
    } catch (error) {
        yield put({type: types.DELETE_CATEGORY_FAIL, error});
    }
}

export function * addCategory({payload}) {
    const config = {
        method:'POST',
        url:`https://cyber-flash-backend.herokuapp.com/flashcards/create_category`,
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.ADD_CATEGORY_SUCCESS, data});
    } catch (error) {
        yield put({type: types.ADD_CATEGORY_FAIL, error});
    }
}
export function * editCategory({payload}) {
    const config = {
        method:'PUT',
        url:`https://cyber-flash-backend.herokuapp.com/flashcards/edit_category`,
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.EDIT_CATEGORY_SUCCESS, data});
    } catch (error) {
        yield put({type: types.EDIT_CATEGORY_FAIL, error});
    }
}

export function * deleteDeck({payload}) {
    const config = {
        method:'DELETE',
        url:`https://cyber-flash-backend.herokuapp.com/flashcards/delete_flash_card_deck`,
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.DELETE_DECKS_SUCCESS, data});
    } catch (error) {
        yield put({type: types.DELETE_DECKS_FAIL, error});
    }
}

export function * addDeck({payload}) {
    const config = {
        method:'POST',
        url: 'https://cyber-flash-backend.herokuapp.com/flashcards/create_flash_card_deck',
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.ADD_DECK_SUCCESS, data});
    } catch (error) {
        yield put({type: types.ADD_DECK_FAIL, error});
    }
}

export function * editDeck({payload}) {
    const {method, url, body} = payload;
    const config = {
        method,
        url,
        data: body
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.EDIT_DECK_SUCCESS, data});
    } catch (error) {
        yield put({type: types.EDIT_DECK_FAIL, error});
    }
}

export function * addFlashcard({payload}) {
    const config = {
        method:'POST',
        url:'https://cyber-flash-backend.herokuapp.com/flashcards/create_flash_card',
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.ADD_FLASHCARD_SUCCESS, data});
    } catch (error) {
        yield put({type: types.ADD_FLASHCARD_FAIL, error});
    }
}
export function * editFlashcard({payload}) {
    const config = {
        method:'PUT',
        url:'https://cyber-flash-backend.herokuapp.com/flashcards/edit_flash_card',
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.EDIT_FLASHCARD_SUCCESS, data});
    } catch (error) {
        yield put({type: types.EDIT_FLASHCARD_FAIL, error});
    }
}
export function * deleteFlashcard({payload}) {
    const config = {
        method:'PUT',
        url:'https://cyber-flash-backend.herokuapp.com/flashcards/delete_flash_card',
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.DELETE_FLASHCARD_SUCCESS, data});
    } catch (error) {
        yield put({type: types.DELETE_FLASHCARD_FAIL, error});
    }
}
