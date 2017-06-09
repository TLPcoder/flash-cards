'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import DeckMain from './deck-main';

export class Deck extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const payload = {
            method: 'GET',
            url: `http://localhost:8000/flashcards/flash_card_deck/${this.props.location.pathname.split('/')[2]}`
        };
        this.props.getUserDecks(payload);
    }
    render() {
        return (
            <div>
                <DeckMain router={{
                    location: this.props.location,
                    history: this.props.history
                }}/>
            </div>
        )
    }
}

export default connect(({decks})=>({decks}),profileActions)(Deck);
