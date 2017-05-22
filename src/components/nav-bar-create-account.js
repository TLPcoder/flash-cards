'use strict';
import React, {Component} from 'react';

class NavBarCreateAccount extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id = 'nav-bar-create-account'>
                <h1 className = 'app-name' >Cyber Flash</h1>
            <button id = 'login-page-button'>Login</button>
            </div>
        )
    }
}

export default NavBarCreateAccount;
