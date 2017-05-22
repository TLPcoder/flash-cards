'use strict';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer';
import LoginPage from './components/login-page';
import CreateAccount from './components/create-account';

class App extends Component {
  render() {
    return (
        <div>
            <CreateAccount/>
        </div>
    );
  }
}

export default App;
