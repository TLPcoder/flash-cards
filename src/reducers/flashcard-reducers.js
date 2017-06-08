'use strict';
import * as types from '../actions/action-types';


export default(state = [], action) => {
    switch (action.type) {
        case types.GET_FLASHCARDS_SUCCESS:
            return action.data.data
        case types.GET_FLASHCARDS_FAIL:
            return [...state];
        default:
            return state;
    }
};
