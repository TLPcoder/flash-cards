'use strict';
import * as types from './action-types';

export const loginUser = payload => {
    return {
        type: types.LOGIN,
        payload
    };
};

export const createAccount = payload => {
    return {
        type: types.CREATE_ACCOUNT,
        payload
    };
};
