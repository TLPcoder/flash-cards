'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../../actions/profile-actions';
import * as traverse from '../../actions/traversing-actions';

const EditDeck = props => {
    var deckName;
    function updateDeck() {
        const payload = {
            method: 'PUT',
            url: 'http://localhost:8000/flashcards/edit_flash_card_deck',
            body: {
                flash_card_deck_name: deckName.value,
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
    return (
        <div className='field has-addons'>
            <p className='deck-add-text'>
                <input className='input' type="text" ref={i=>{deckName=i}} placeholder='Deck Name' id='edit-deck-name'/>
            </p>
            <p className='edit-deck-contols'>
                <input className='button is-primary is-outlined' type="button" value='Update' onClick={updateDeck}/>
                <input className='button is-danger is-outlined' type="button" value='Back' onClick={() => {
                    props.editDeckTraverse({
                        deckID: props.traverse.decks.edit.deckID,
                        editDeck: !props.traverse.decks.edit.editDeck
                    });
                }}/>
            </p>
        </div>
    )
}

export default connect(({decks, traverse}) => ({decks, traverse}), {
    ...profileActions,
    ...traverse
})(EditDeck)
