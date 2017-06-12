'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/action-types';

export function * login({payload}) {
    const config = {
        method:'POST',
        url:`http://localhost:8000/users/login`,
        data: payload
    };

    try {
        const data = yield call(axios,config);
        yield put({type: types.LOGIN_SUCCESS, data});
    } catch (error) {
        yield put({type: types.LOGIN_FAIL, error});
    }
}

export function * createAccount({payload}){
    const config = {
        method:'POST',
        url:'http://localhost:8000/users/create-user',
        data: payload
    };
    try{
        const data = yield call(axios, config);
        yield put({type: types.CREATE_ACCOUNT_SUCCESS, data});
    }catch(error){
        yield put({type: types.CREATE_ACCOUNT_FAIL, error});
    }
}
