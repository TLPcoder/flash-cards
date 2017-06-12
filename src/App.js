'use strict';
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import PeopleContainer from './components/PeopleContainer';
import LoginPage from './components/login-components/login-page';
import CreateAccount from './components/create-account-components/create-account';
import Profile from './components/category-components/profile';
import Deck from './components/deck-components/deck';
import FlashCardsMain from './components/flashcard-components/flashcards-main';
import {Switch, Route} from 'react-router-dom';

const App = props => {
    return (
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/create-account' component={CreateAccount}/>
            <Route exact path='/profile' component={Profile}/>
            <Route path='/flashcards/:id' component={FlashCardsMain}/>
            <Route path='/deck/:id' component={Deck}/>
        </Switch>
    );
}

export default App;
