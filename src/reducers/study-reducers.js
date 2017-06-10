import * as types from '../actions/study-action-types';

var initialState = {
    counter: 0,
    question: true,
    answer: false
}

export default (state = initialState, payload) => {
    switch(payload.type){
        case types.NEXT:
            return {...state, counter: state.counter + 1}
        case types.BACK:
            return {...state, counter: state.counter - 1}
        case types.QUESTION:
            return {...state, question: true, answer: false}
        case types.ANSWER:
            return {...state, question:false, answer: true}
        default:
            return state
    }
}
