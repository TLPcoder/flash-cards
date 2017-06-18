'use strict';
import * as types from '../actions/action-types-traverse';
var initialState = {
    decks: {
        edit: {
            editDeck: false,
            deckID: null
        },
        add: false,
        loading: false
    },
    flashcards: {
        edit: {
            editFlashcard: false,
            flashcarID: null,
            question: '',
            answer: ''
        },
        add: false,
        study: false,
        loading: false
    },
    categories: {
        edit: {
            editCategory: false,
            categoryID: null
        },
        add: false,
        loading: false
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
                    add: state.decks.add,
                    loading: state.decks.loading
                }
            };
        case types.ADD_DECK_TRAVERSE:
            return {
                ...state,
                decks: {
                    edit: {
                        ...state.decks.edit
                    },
                    add: action.payload,
                    loading: state.decks.loading
                }
            };
        case types.LOADING_DECKS:
            return {
                ...state,
                decks: {
                    edit: {
                        ...state.decks.edit
                    },
                    add: state.decks.add,
                    loading: action.payload
                }
            }
        case types.EDIT_FLASHCARD_TRAVERSE:
            return {
                ...state,
                flashcards: {
                    edit: {
                        editFlashcard: action.payload.editFlashcard,
                        flashcarID: action.payload.flashcarID,
                        question: action.payload.question,
                        answer: action.payload.answer
                    },
                    add: state.flashcards.add,
                    study: state.flashcards.study,
                    loading: state.flashcards.loading
                }
            };
        case types.ADD_FLASHCARD_TRAVERSE:
            return {
                ...state,
                flashcards: {
                    edit: {
                        ...state.flashcards.edit
                    },
                    add: action.payload,
                    study: state.flashcards.study,
                    loading: state.flashcards.loading
                }
            }
        case types.STUDY_FLASHCARD_TRAVERSE:
            return {
                ...state,
                flashcards: {
                    edit: {
                        ...state.flashcards.edit
                    },
                    add: state.flashcards.add,
                    study: !state.flashcards.study,
                    loading: state.flashcards.loading
                }
            };
        case types.LOADING_FLASHCARDS:
            return {
                ...state,
                flashcards: {
                    edit: {
                        ...state.decks.edit
                    },
                    add: state.decks.add,
                    study: state.flashcards.study,
                    loading: action.payload
                }
            }
        case types.EDIT_CATEGORY_TRAVERSE:
            return {
                ...state,
                categories: {
                    edit: {
                        editCategory: action.payload.editCategory,
                        categoryID: action.payload.categoryID
                    },
                    add: state.categories.add,
                    loading: state.categories.loading
                }
            };
        case types.ADD_CATEGORY_TRAVERSE:
            return {
                ...state,
                categories: {
                    edit: {
                        ...state.categories.edit
                    },
                    add: action.payload,
                    loading: state.categories.loading
                }
            }
        case types.LOADING_CATEGORIES:
            return {
                ...state,
                categories: {
                    edit: {
                        ...state.categories.edit
                    },
                    add: state.categories.add,
                    loading: action.payload
                }
            }
        default:
            return state
    }
}
