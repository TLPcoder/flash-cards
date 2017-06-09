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
        this.props.deleteUserDeck({
            field_of_study_id: Number(this.props.location.pathname.split('/')[2]),
            flash_card_deck_id: event.target.name
        });
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
