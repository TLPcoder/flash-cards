'use strict';
import * as types from '../actions/action-types-traverse';

var initialState = {
    decks: {
        edit: {
            editDeck: false,
            deckID: null
        },
        add:false
    },
    flashcards: {
        edit: {
            editFlashcard: false,
            flashcarID: null
        },
        add:false
    }
};

export default(state = initialState, action) => {
    switch(action.type){
        case types.EDIT_DECK_TRAVERSE:
            return {...state, edit:action.payload};
        case types.ADD_DECK_TRAVERSE:
            return {...state, decks:{
                edit:{...state.decks.edit},
                add:action.payload
            }};
        case types.EDIT_FLASHCARD_TRAVERSE:
            return {...state, edit:action.payload};
        case types.ADD_FLASHCARD_TRAVERSE:
            return {...state, add:action.payload};
        default:
            return state
    }
}
