'use strict';
import * as types from '../actions/action-types';

export default (state = {user:false}, action) => {
    console.log('action', action);
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return Object.assign({user:true}, action.data.data);
        case types.LOGIN_FAIL:
            return Object.assign({user:false});
        case types.CREATE_ACCOUNT_SUCCESS:
            return Object.assign({user:true}, {data:action.data.data});
        case types.CREATE_ACCOUNT_FAIL:
            return Object.assign({user:false});
        case types.LOG_OUT:
            return Object.assign({user:false});
        default:
            return state;
    }
};
