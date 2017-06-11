'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as userActions from '../actions/user-actions';

const NavBar = props => {
    function logout(){
        props.logout();
        props.router.location.pathname = '/';
        sessionStorage.clear();
    }
    return (
        <Link to='/' className = 'button is-primary nav-bar-logout' onClick={logout}>Logout</Link>
    )
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,{...userActions})(NavBar);
