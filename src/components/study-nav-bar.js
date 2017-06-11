'use strict'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css'

const StudyNavBar = props => {
    function logout(){
        sessionStorage.clear();
    }
    return (
        <div id='nav-bar-login' className='level'>
            <div className='level-left'>
                <h1 className='level-item title is-1'>Cyber Flash</h1>
            </div>
            <div className='left-right margin-right'>
                <Link to='/' className='button is-primary level-item' onClick={logout}>Logout</Link>
            </div>
        </div>
    )
}

export default StudyNavBar;
