'use strict';
import * as types from '../actions/action-types';

export default (state = {user:false}, action) => {
    switch(action.type){
        case types.LOGIN_IN:
            return Object.assign({user:true}, action.payload);
        case types.LOG_OUT:
            return Object.assign({user:false});
        default:
            return state;
    }
};
