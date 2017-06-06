'use strict';
import * as types from '../actions/action-types';

export default (state = {'flashcards': {'categories' : []}}, action) =>{
    switch(action.type){
        case types.GET_CATEGORIES_SUCCESS:
            return Object.assign(...state, {'categories' : action.data.data});
        case types.GET_CATEGORIES_FAIL:
            return Object.assign(state);
        case types.ADD_CATEGORY_SUCCESS:
            return Object.assign(...state, {'categories' : action.data.data});
        case types.ADD_CATEGORY_FAIL:
            return Object.assign(state);
        default:
            return state;
    }
};
