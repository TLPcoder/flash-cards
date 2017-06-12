'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const NavBarCreateAccount = props => {
    return (
        <div id='nav-bar-login' className='level'>
            <div className='level-left'>
                <h1 className='level-item title is-1'>Cyber Flash</h1>
            </div>
            <div className='left-right'>
                <Link to='/' className='button is-primary level-item account-button margin-right'>Login</Link>
            </div>
        </div>
    )
}



export default NavBarCreateAccount;
