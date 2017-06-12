'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../../actions/profile-actions';
import * as traverse from '../../actions/traversing-actions';

const AddDeck = props => {
    function addDeck() {
        const payload = {
            flash_card_deck_name: document.getElementById('deck-card-name').value,
            field_of_study_id: props.location.pathname.split('/')[2]
        };
        props.postUserDecks(payload);
        props.addDeckTraverse(!props.state.traverse.decks.add);
    }
    function back() {
        props.addDeckTraverse(!props.state.traverse.decks.add)
    }
    return (
        <div className='field has-addons'>
            <p className='deck-add-text'>
                <input type="text" className='input' placeholder='Deck Name' id='deck-card-name'/>
            </p>
            <p className='add-deck-contols'>
                <input className='button is-outlined is-primary' type="button" value="Add" onClick={addDeck}/>
                <input className='button is-outlined is-danger' type="button" value="Back" onClick={back}/>
            </p>
        </div>
    )
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps, {
    ...profileActions,
    ...traverse
})(AddDeck)
