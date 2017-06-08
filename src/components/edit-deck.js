'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';

const EditDeck = props => {
    function updateDeck() {
        console.log('edit props', props);
        const payload = {
            method: 'PUT',
            url: 'http://localhost:8000/flashcards/edit_flash_card_deck',
            body: {
                flash_card_deck_name: document.getElementById('edit-deck-name').value,
                flash_card_deck_id: props.edit.editID,
                field_of_study_id: props.edit.router.location.pathname.split('/')[2]
            }
        };
        props.putUserDecks(payload);
        props.edit.edited();
    }
    console.log('edit deck', props);
    return (
        <div>
            <input type="text" placeholder='Deck Name' id='edit-deck-name'/>
            <input type="button" value='Update' onClick={updateDeck}/>
            <input type="button" value='Back' onClick={props.edit.edited}/>
        </div>
    )
}

export default connect(({decks}) => ({decks}), profileActions)(EditDeck)
