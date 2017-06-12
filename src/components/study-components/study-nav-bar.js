'use strict'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css'

const StudyNavBar = props => {
    function logout() {
        sessionStorage.clear();
    }
    return (
        <div id='nav-bar-login' className='nav'>
            <div className='nav-left'>
                <div className='nav-item'>
                    <h1 className='title is-1'>Cyber Flash</h1>
                </div>
            </div>
            <div className='nav-right margin-right'>
                <div className='nav-item fix-me-please1'>
                    <Link to='/' className='button is-primary nav-item' onClick={logout}>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default StudyNavBar;
