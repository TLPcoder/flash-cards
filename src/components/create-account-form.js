'use strict';
import React, {Component} from 'react';
import * as userActions from '../actions/user-actions';
import {connect} from 'react-redux';
import axios from 'axios';

class CreateAccountForm extends Component {
    constructor(props) {
        super(props);
        this.createAccount = this.createAccount.bind(this);
    }
    createAccount() {
        const payload = {
            method: 'POST',
            url: 'http://localhost:8000/users/create-user',
            body: {
                first_name: document.getElementById('first-name').value,
                last_name: document.getElementById('last-name').value,
                email: document.getElementById('email').value,
                hashed_password: document.getElementById('password').value,
            }

        };
        this.props.createAccount(payload);
    }
    render() {
        if (this.props.users.user) {
            if(!this.props.users.emailUsed){
                sessionStorage.setItem('user', this.props.users.data[0].user_id);
                this.props.router.history.push('/profile');
            }
        }
        return (
            <div id='create-account-form'>
                <input id='first-name' className='create-user-form-text input is-info login-text ' type="text" placeholder='First Name'/>
                <input id='last-name' className='create-user-form-text input is-info login-text' type="text" placeholder='Last Name'/>
                <input id='email' className='create-user-form-text input is-info login-text' type="email" placeholder='Email'/>
                <input id='password' className='create-user-form-text input is-info login-text' type="password" placeholder='Password'/>
                <input type="button" value="Create Account" className='button is-medium is-primary' onClick={this.createAccount}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    ...userActions
})(CreateAccountForm);
