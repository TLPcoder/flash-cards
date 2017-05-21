'use strict';
import * as types from './action-types';

export const loginUser = (payload) => {
    return {
        type: types.LOGIN_IN,
        payload
    };
};
