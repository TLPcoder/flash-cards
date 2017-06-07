'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../actions/user-actions';
import axios from 'axios';

const LoginForm = props => {
    function checkLogin() {
        var payload = {
            body: {
                email: document.getElementById('email-login').value,
                hashed_password: document.getElementById('password-login').value
            },
            url: `http://localhost:8000/users/login`,
            method: 'post'
        };
        props.loginUser(payload);
    }

    if (props.users.user) {
        sessionStorage.setItem('user', props.users.data[0].user_id);
        props.router.history.push('/profile')
    }

    return (
        <div id='LoginForm-container'>
            <label>Email</label>
            <input id='email-login' type="text" placeholder='email'/>
            <br/>
            <label>Password</label>
            <input id='password-login' type="password" placeholder='password'/>
            <br/>
            <input type="button" value='Login' onClick={checkLogin}/>
        </div>
    )

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    ...userActions
})(LoginForm);
