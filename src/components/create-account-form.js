'use strict';
import React, {Component} from 'react';
import axios from 'axios';

class CreateAccountForm extends Component{
    constructor(props){
        super(props)
    }
    createAccount(){
        axios.post('http://localhost:8000/users/create-user',{
            first_name: document.getElementById('first-name').value,
            last_name:document.getElementById('last-name').value,
            email:document.getElementById('email').value,
            password:document.getElementById('password').value,
            age:document.getElementById('age').value
        }).then((res) => {
            console.log(res);
            if(res.data.emailUsed){
                alert('email is taken');
            }else{
                sessionStorage.setItem('user', res.data[0].user_id);
            }
        }).catch((err) => {
            console.log(err);
        });
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

export default CreateAccountForm;
