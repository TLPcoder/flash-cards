'use strict'
import React, {Component} from 'react';
import axios from 'axios';

class LoginForm extends Component{
    constructor(props){
        super(props)
    }
    checkLogin(){
        console.log(document.getElementById('email-login').value);
        axios.post('http://localhost:8000/users/login', {
            email: document.getElementById('email-login').value,
            password: document.getElementById('password-login').value
        })
        .then((res) => {
            console.log('response',res);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render(){
        return (
            <div id = 'LoginForm-container'>
                <label>Email</label>
                <input id = 'email-login' type="text" placeholder='email'/>
                <br/>
                <label>Password</label>
                <input id = 'password-login' type="password" placeholder='password'/>
                <br/>
            <input type="button" value = 'Login' onClick={this.checkLogin}/>
            </div>
        )
    }
}

export default LoginForm;
