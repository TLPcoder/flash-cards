'use strict';
import React, {Component} from 'react';
import NavBarLogin from './nav-bar-login';
import LoginForm from './login-form';

const LoginPage = props => {
    console.log('props', props);
    return (
        <div>
            <NavBarLogin router={props}/>
            <LoginForm router={props}/>
        </div>
    )
}

export default LoginPage;
