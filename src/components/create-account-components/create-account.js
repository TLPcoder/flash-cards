'use strict';
import React from 'react';
import NavBarCreateAccount from './nav-bar-create-account';
import CreateAccountForm from './create-account-form';

const CreateAccount = props => {
        return (
            <div>
                <div id = "background-image"></div>
                <NavBarCreateAccount/>
                <CreateAccountForm router={props}/>
            </div>
        )
}

export default CreateAccount;
