'use strict';
import * as types from './action-types';

export const getUserCategories = payload => {
    return {type: types.GET_CATEGORIES, payload};
};

export const addCategory = payload => {
    return {type: types.ADD_CATEGORY, payload};
};

export const getUserDecks = payload => {
    return {type: types.GET_DECKS, payload};
};
export const postUserDecks = payload => {
    return {type: types.ADD_DECK, payload};
};
export const putUserDecks = payload => {
    return {type: types.EDIT_DECK, payload};
};

export const deleteUserDeck = payload => {
    return {type: types.DELETE_DECKS, payload};
};

export const getFlashCards = payload => {
    return {type: types.GET_FLASHCARDS, payload};
};

export const deleteCategory = payload => {
    return {type: types.DELETE_CATEGORY, payload};
};

export const editCategory = payload => {
    return {type: types.EDIT_CATEGORY, payload};
};
