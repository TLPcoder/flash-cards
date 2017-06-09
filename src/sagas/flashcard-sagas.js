'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/action-types';

export function * getCategories({payload}) {
    const {method, url} = payload;
    const config = {
        method,
        url
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
    const {method, url, body} = payload;
    const config = {
        method,
        url,
        data: body
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.DELETE_CATEGORY_SUCCESS, data});
    } catch (error) {
        yield put({type: types.DELETE_CATEGORY_FAIL, error});
    }
}

export function * addCategory({payload}) {
    const {method, url, body} = payload;
    const config = {
        method,
        url,
        data: body
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.ADD_CATEGORY_SUCCESS, data});
    } catch (error) {
        yield put({type: types.ADD_CATEGORY_FAIL, error});
    }
}
export function * editCategory({payload}) {
    const {method, url, body} = payload;
    const config = {
        method,
        url,
        data: body
    };
    console.log('hello from edit category saga', config);
    try {
        const data = yield call(axios, config);
        yield put({type: types.EDIT_CATEGORY_SUCCESS, data});
    } catch (error) {
        yield put({type: types.EDIT_CATEGORY_FAIL, error});
    }
}

export function * deleteDeck({payload}) {
    const {method, url, body} = payload;
    const config = {
        method,
        url,
        data: body
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.DELETE_DECKS_SUCCESS, data});
    } catch (error) {
        yield put({type: types.DELETE_DECKS_FAIL, error});
    }
}

export function * addDeck({payload}) {
    const {method, url, body} = payload;
    const config = {
        method,
        url,
        data: body
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
        url:'http://localhost:8000/flashcards/create_flash_card',
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
        url:'http://localhost:8000/flashcards/edit_flash_card',
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
        url:'http://localhost:8000/flashcards/delete_flash_card',
        data: payload
    };
    try {
        const data = yield call(axios, config);
        yield put({type: types.DELETE_FLASHCARD_SUCCESS, data});
    } catch (error) {
        yield put({type: types.DELETE_FLASHCARD_FAIL, error});
    }
}
