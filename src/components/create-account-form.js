'use strict';
import React, {Component} from 'react';
import * as userActions from '../actions/user-actions';
import {connect} from 'react-redux';
import axios from 'axios';

class CreateAccountForm extends Component{
    constructor(props){
        super(props);
        this.createAccount = this.createAccount.bind(this);
    }
    componentWillMount(){
        console.log(this.props);
    }
    createAccount(){
        const payload = {
            method:'POST',
            url: 'http://localhost:8000/users/create-user',
            body: {
                first_name: document.getElementById('first-name').value,
                last_name:document.getElementById('last-name').value,
                email:document.getElementById('email').value,
                hashed_password:document.getElementById('password').value,
                age:document.getElementById('age').value
            }

        };
        console.log('create account', this.props);
        this.props.createAccount(payload);
        //sessionStorage.setItem('user', res.data[0].user_id);

    }
    render(){
        return(
            <div>
                <input id = 'first-name' className = 'create-user-form-text' type="text" placeholder = 'First Name'/>
                <input id = 'last-name' className = 'create-user-form-text' type="text" placeholder = 'Last Name'/>
                <input id = 'email' className = 'create-user-form-text' type="email" placeholder = 'Email'/>
                <input id = 'age' className = 'create-user-form-text' type="text" placeholder = 'Age'/>
                <input id = 'password' className = 'create-user-form-text' type="password" placeholder = 'Password'/>
                <input type="button" value="Create Account" onClick = {this.createAccount}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,{...userActions})(CreateAccountForm);
