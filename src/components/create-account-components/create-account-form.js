'use strict';
import React from 'react';
import * as userActions from '../../actions/user-actions';
import {connect} from 'react-redux';
import axios from 'axios';

const CreateAccountForm = props => {
    function createAccount() {
        const payload = {
                first_name: document.getElementById('first-name').value,
                last_name: document.getElementById('last-name').value,
                email: document.getElementById('email').value,
                hashed_password: document.getElementById('password').value
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
                <input id='first-name' className='create-user-form-text input is-info login-text ' type="text" placeholder='First Name'/>
                <input id='last-name' className='create-user-form-text input is-info login-text' type="text" placeholder='Last Name'/>
                <input id='email' className='create-user-form-text input is-info login-text' type="email" placeholder='Email'/>
                <input id='password' className='create-user-form-text input is-info login-text' type="password" placeholder='Password'/>
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
