import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer';
import LoginPage from './components/login-page';

class App extends Component {
  render() {
    return (
        <div>
            <LoginPage/>
        </div>
    );
  }
}

export default App;
