'use strict';
import React, {Component} from 'react';

class CreateAccountForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <input type="text" placeholder = 'First Name'/>
                <input type="text" placeholder = 'Last Name'/>
                <input type="email" placeholder = 'Email'/>
                <input type="text" placeholder = 'Age'/>
                <input type="password" placeholder = 'Password'/>
            </div>
        )
    }
}

export default CreateAccountForm;
