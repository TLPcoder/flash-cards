'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';

const EditDeck = props => {
    function updateDeck() {
        const payload = {
            method: 'PUT',
            url: 'http://localhost:8000/flashcards/edit_flash_card_deck',
            body: {
                flash_card_deck_name: document.getElementById('edit-deck-name').value,
                flash_card_deck_id: props.traverse.decks.edit.deckID,
                field_of_study_id: props.edit.router.location.pathname.split('/')[2]
            }
        };
        props.putUserDecks(payload);
        props.editDeckTraverse({
            deckID: props.traverse.decks.edit.deckID,
            editDeck: !props.traverse.decks.edit.editDeck
        });
    }
    console.log('edit deck', props);
    return (
        <div>
            <input type="text" placeholder='Deck Name' id='edit-deck-name'/>
            <input type="button" value='Update' onClick={updateDeck}/>
            <input type="button" value='Back' onClick={() => {
                props.editDeckTraverse({
                    deckID: props.traverse.decks.edit.deckID,
                    editDeck: !props.traverse.decks.edit.editDeck
                });
            }}/>
        </div>
    )
}

export default connect(({decks, traverse}) => ({decks, traverse}), {
    ...profileActions,
    ...traverse
})(EditDeck)
