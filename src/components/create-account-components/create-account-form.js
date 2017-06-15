'use strict';
import React from 'react';
import * as userActions from '../../actions/user-actions';
import {connect} from 'react-redux';
import axios from 'axios';

const CreateAccountForm = props => {
    var create = {
        firstname: null,
        lastname: null,
        email: null,
        password: null
    };
    function createAccount() {
        const payload = {
            first_name: create.firstname.value,
            last_name: create.lastname.value,
            email: create.email.value,
            hashed_password: create.password.value
        };
        props.createAccount(payload);
    }

    if (props.users.user) {
        if (!props.users.emailUsed) {
            sessionStorage.setItem('user', props.users.data[0].user_id);
            props.router.history.push('/profile');
        }
    } else {
        return (
            <div id='create-account-form'>
                <input className='create-user-form-text input is-info login-text' id='first-name' ref={input => {
                    create.firstname = input
                }} type="text" placeholder='First Name'/>
                <input className='create-user-form-text input is-info login-text' id='last-name' ref={input => {
                    create.lastname = input
                }} type="text" placeholder='Last Name'/>
                <input className='create-user-form-text input is-info login-text' id='email' ref={input => {
                    create.email = input
                }} type="email" placeholder='Email'/>
                <input className='create-user-form-text input is-info login-text' id='password' ref={input => {
                    create.password = input
                }} type="password" placeholder='Password'/>
                <input type="button" value="Create Account" className='button is-medium is-primary' onClick={createAccount}/>
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
