'use strict';
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import PeopleContainer from './components/PeopleContainer';
import LoginPage from './components/login-page';
import CreateAccount from './components/create-account';
import Profile from './components/profile';
import Deck from './components/deck';
import FlashCards from './components/flashcards';
import {Switch, Route} from 'react-router-dom';

const App = props => {
    return (
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/create-account' component={CreateAccount}/>
            <Route exact path='/profile' component={Profile}/>
            <Route path='/flashcards/:id' component={FlashCards}/>
            <Route path='/deck/:id' component={Deck}/>
        </Switch>
    );
}

export default App;
