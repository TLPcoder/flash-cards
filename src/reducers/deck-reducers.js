'use strict';
import * as types from '../actions/action-types';


export default(state = [], action) => {
    switch (action.type) {
        case types.GET_DECKS_SUCCESS:
            return action.data.data;
        case types.GET_DECKS_FAIL:
            return [...state];
        case types.EDIT_DECK_SUCCESS:
            return action.data.data;
        case types.EDIT_DECK_FAIL:
            return [...state];
        case types.DELETE_DECKS_SUCCESS:
            return action.data.data;
        case types.DELETE_DECKS_FAIL:
            return [...state];
        case types.ADD_DECK_SUCCESS:
            return action.data.data;
        case types.ADD_DECK_FAIL:
            return [...state];
        default:
            return state;
    }
};
