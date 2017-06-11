'use strict'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css'

const NavBarLogin = props => {
    return (
        <div id='nav-bar-login' className='level'>
            <div className='level-left'>
                <h1 className='level-item title is-1'>Cyber Flash</h1>
            </div>
            <div className='left-right'>
                <Link to='/create-account' className='button is-primary level-item'>Create Account</Link>
            </div>
        </div>
    )
}

export default NavBarLogin;
