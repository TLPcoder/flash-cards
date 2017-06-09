'use strict';
import * as types from './action-types-traverse';

export const addDeckTraverse = payload => {
    return {
        type:types.ADD_DECK_TRAVERSE,
        payload
    };
};

export const editDeckTraverse = payload => {
    return {
        type:types.EDIT_DECK_TRAVERSE,
        payload
    };
};

export const addFlashcardTraverse = payload => {
    return {
        type:types.ADD_FLASHCARD_TRAVERSE,
        payload
    };
};

export const editFlashcardTraverse = payload => {
    return {
        type:types.EDIT_FLASHCARD_TRAVERSE,
        payload
    };
};

export const studyFlashcardTraverse = payload => {
    return {
        type:types.STUDY_FLASHCARD_TRAVERSE,
        payload
    };
};

export const addCategoryTraverse = payload => {
    return {
        type:types.ADD_CATEGORY_TRAVERSE,
        payload
    };
};

export const editCategoryTraverse = payload => {
    return {
        type:types.EDIT_CATEGORY_TRAVERSE,
        payload
    };
};
