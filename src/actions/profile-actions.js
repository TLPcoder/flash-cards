'use strict';
import * as types from './action-types';

export const getUserCategories = payload =>{
    return {
        type: types.GET_CATEGORIES,
        payload
    };
};

export const addCategory = payload =>{
    return {
        type: types.ADD_CATEGORY,
        payload
    };
};

export const getUserDecks = payload =>{
    return {
        type: types.GET_DECKS,
        payload
    };
};

export const getFlashCards = payload =>{
    return {
        type: types.GET_FLASHCARDS,
        payload
    };
};