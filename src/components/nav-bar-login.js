'use strict'
import React, {Component} from 'react';

class NavBarLogin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id = 'nav-bar-login'>
                <h1 className = 'app-name' >Cyber Flash</h1>
            <button id = 'create-account-page-button'>Create Account</button>
            </div>
        )
    }
}

export default NavBarLogin;
