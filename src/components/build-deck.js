'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as traverse from '../actions/traversing-actions';

const BuildDeck = props => {
    function editDeck({target}){
        props.editDeckTraverse({
            deckID:target.name,
            editDeck:!props.traverse.decks.edit.editDeck
        });
    }
    function buildDeck() {
        return props.decks.data.map(el => {
            var toFlash = `/flashcards/${el.flash_card_deck_id}`;
            return (
                <div>
                    <input type="button" value='edit' name={el.flash_card_deck_id} onClick={editDeck}/>
                    <input type="button" value='delete' name={el.flash_card_deck_id} onClick={props.decks.deleteDeck}/>
                    <Link className='deck-card' to={toFlash}>
                        <h4>{el.flash_card_deck_name}</h4>
                    </Link>
                </div>
            )
        });
    }
    return (
        <div>{buildDeck()}</div>
    )
}

export default connect(({traverse}) => ({traverse}), {
    ...traverse
})(BuildDeck);
