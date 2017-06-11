'use strict';
import React, {Component} from 'react';
import NavBarCreateAccount from './nav-bar-create-account';
import CreateAccountForm from './create-account-form';

class CreateAccount extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <NavBarCreateAccount/>
                <CreateAccountForm router={this.props}/>
            </div>
        )
    }
}

export default CreateAccount;
