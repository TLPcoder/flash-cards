'use strict';
import * as types from '../actions/action-types';


export default(state = [], action) => {
    switch (action.type) {
        case types.GET_FLASHCARDS_SUCCESS:
            return action.data.data
        case types.GET_FLASHCARDS_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
};



// const initialState = {
//     categories: [],
//     deck: [],
//     flashcards: []
// };
//
// export default(state = initialState, action) => {
//     switch (action.type) {
//         case types.GET_CATEGORIES_SUCCESS:
//             return {
//                 ...state,
//                 categories: action.data.data
//             };
//         case types.GET_CATEGORIES_FAIL:
//             return {
//                 ...state
//             };
//         case types.ADD_CATEGORY_SUCCESS:
//             return {
//                 ...state,
//                 categories: action.data.data
//             };
//         case types.ADD_CATEGORY_FAIL:
//             return {
//                 ...state
//             };
//         case types.EDIT_CATEGORY_SUCCESS:
//             return {
//                 ...state,
//                 categories: action.data.data
//             };
//         case types.EDIT_CATEGORY_FAIL:
//             return {
//                 ...state
//             };
//         case types.GET_DECKS_SUCCESS:
//             return {
//                 ...state,
//                 deck: action.data.data
//             };
//         case types.GET_DECKS_FAIL:
//             return {
//                 ...state
//             };
//         case types.DELETE_DECK_SUCCESS:
//             return {
//                 ...state,
//                 deck: action.data.data
//             };
//         case types.DELETE_DECK_FAIL:
//             return {
//                 ...state
//             };
//         case types.GET_FLASHCARDS_SUCCESS:
//             return {
//                 ...state,
//                 flashcards: action.data.data
//             };
//         case types.GET_FLASHCARDS_FAIL:
//             return {
//                 ...state
//             };
//         case types.DELETE_CATEGORY_SUCCESS:
//             return {
//                 ...state,
//                 categories: action.data.data
//             };
//         case types.DELETE_CATEGORY_FAIL:
//             return {
//                 ...state
//             };
//         default:
//             return state;
//     }
// };
