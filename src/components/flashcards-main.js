'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import FlashCards from './flashcards';

export class FlashCardsMain extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount = () => {
        this.props.getFlashCards(`http://localhost:8000/flashcards/flash_card_cards/${this.props.location.pathname.split('/')[2]}`);
    }
    deleteFlashCard = (event) => {
        const payload = {
            flash_card_id: event.target.name,
            flash_card_deck_id: this.props.location.pathname.split('/')[2]
        };
        this.props.deleteFlashcard(payload);
    }
    render() {
        return (<FlashCards flashcard={{
            deleteFlashCard: this.deleteFlashCard,
            location: this.props.location,
        }}/>)
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(FlashCardsMain);
