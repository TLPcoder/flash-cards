'use strict'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const NavBarLogin = props => {
    return (
        <div id='nav-bar-login'>
            <h1 className='app-name'>Cyber Flash</h1>
            <Link to='/create-account'>Create Account</Link>
        </div>
    )
}

export default NavBarLogin;
