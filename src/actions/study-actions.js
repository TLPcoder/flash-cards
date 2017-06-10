'use strict';
import * as types from './study-action-types';

export const nextFlashcard = payload => {
    return {
        type: types.NEXT,
        payload
    };
};

export const backFlashcard = payload => {
    return {
        type: types.BACK,
        payload
    };
};

export const questionFlashcard = payload => {
    return {
        type: types.QUESTION,
        payload
    };
};

export const answerFlashcard = payload => {
    return {
        type: types.ANSWER,
        payload
    };
};
