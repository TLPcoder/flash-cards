'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';

const EditDeck = props => {
    function updateDeck() {
        const payload = {
            method: 'PUT',
            url: '',
            body: {
                flash_card_deck_name: document.getElementById('edit-deck-name'),
                flash_card_deck_id: props.edit.editID,
                field_of_study_id: props.router.location.pathname.split('/')[2]
            }
        };
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
