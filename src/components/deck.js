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
        this.props.getUserDecks(`http://localhost:8000/flashcards/flash_card_deck/${this.props.location.pathname.split('/')[2]}`);
    }
    
    deleteDeck = (event) => {
        console.log('hello from delete');
        const payload = {
            method: 'DELETE',
            url: `http://localhost:8000/flashcards/delete_flash_card_deck`,
            body: {
                field_of_study_id: Number(this.props.location.pathname.split('/')[2]),
                flash_card_deck_id: event.target.name
            }
        };
        this.props.deleteUserDeck(payload);
    }
    render() {
        return (
            <div>
                <DeckMain router={{
                    location: this.props.location,
                    history: this.props.history,
                    deleteDeck: this.deleteDeck
                }}/>
            </div>
        )
    }
}

export default connect(({decks}) => ({decks}), profileActions)(Deck);
