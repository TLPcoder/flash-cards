'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../actions/user-actions';
import axios from 'axios';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.checkLogin = this.checkLogin.bind(this);
    }
    checkLogin(){
        axios.post('http://localhost:8000/users/login', {
            email: document.getElementById('email-login').value,
            password: document.getElementById('password-login').value
        })
        .then((res) => {
            console.log('response',res.data.data[0]);
            this.props.loginUser(res.data.data[0]);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render(){
        console.log('props', this.props);
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

function mapStateToProps(state){
    return state;
}



export default connect(mapStateToProps, {...userActions})(LoginForm);
