'use strict';
import * as types from '../actions/action-types';

export default(state = [], action) => {
    switch (action.type) {
        case types.GET_CATEGORIES_SUCCESS:
            return action.data.data
        case types.GET_CATEGORIES_FAIL:
            return [...state];
        case types.ADD_CATEGORY_SUCCESS:
            return action.data.data
        case types.ADD_CATEGORY_FAIL:
            return [...state];
        case types.EDIT_CATEGORY_SUCCESS:
            return action.data.data
        case types.EDIT_CATEGORY_FAIL:
            return [...state];
        case types.DELETE_CATEGORY_SUCCESS:
            return action.data.data
        case types.DELETE_CATEGORY_FAIL:
            return [...state];
        default:
            return state;
    }
};
