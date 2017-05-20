'use strict';
import React, {Component} from 'react';
import NavBarLogin from './nav-bar-login';
import LoginForm from './login-form';

class LoginPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <NavBarLogin/>
                <LoginForm/>
            </div>
        )
    }
}

export default LoginPage;
