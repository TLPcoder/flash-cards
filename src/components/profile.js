'use strict';
import React from 'react';
import Main from './main';
import NavBar from './nav-bar';

const Profile = props => {
    return (
        <div>
            <NavBar router={props}/>
            <Main router={props}/>
        </div>
    )
};

export default Profile;
