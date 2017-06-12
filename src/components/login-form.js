'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../actions/user-actions';
import axios from 'axios';
import 'bulma/css/bulma.css';

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
        props.router.history.push('/profile');
    }

    return (
        <div id ='flex-login'>
        <div id='loginForm-container'>
            <input id='email-login' className='input is-info login-text' type="text" placeholder='email'/>
            <br/>
            <input id='password-login' className='input is-info login-text' type="password" placeholder='password'/>
            <br/>
            <input type="button" value='Login' className='button is-medium is-primary' onClick={checkLogin}/>
        </div>
        </div>
    )

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    ...userActions
})(LoginForm);
