'use strict';
import * as types from '../actions/action-types-traverse';

var initialState = {
    decks: {
        edit: {
            editDeck: false,
            deckID: null
        },
        add: false
    },
    flashcards: {
        edit: {
            editFlashcard: false,
            flashcarID: null
        },
        add: false
    }
};

export default(state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_DECK_TRAVERSE:
            return {
                ...state,
                decks: {
                    edit: {
                        editDeck: action.payload.editDeck,
                        deckID: action.payload.deckID
                    },
                    add: state.decks.add
                }
            };
        case types.ADD_DECK_TRAVERSE:
            return {
                ...state,
                decks: {
                    edit: {
                        ...state.decks.edit
                    },
                    add: action.payload
                }
            };
        case types.EDIT_FLASHCARD_TRAVERSE:
            return {
                ...state,
                flashcards: {
                    edit: {
                        editFlashcard: action.payload.editFlashcard,
                        flashcarID: action.payload.flashcarID
                    },
                    add: state.flashcards.add
                }
            };
        case types.ADD_FLASHCARD_TRAVERSE:
            return {
                ...state,
                flashcards: {
                    edit: {
                        ...state.flashcards.edit
                    },
                    add: action.payload
                }
            }
        default:
            return state
    }
}
