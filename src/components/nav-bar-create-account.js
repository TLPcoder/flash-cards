'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const NavBarCreateAccount = props =>{
    return(
        <div id = 'nav-bar-create-account'>
            <h1 className = 'app-name'>Cyber Flash</h1>
            <Link to='/'>Login</Link>
        </div>
    )
}

export default NavBarCreateAccount;
