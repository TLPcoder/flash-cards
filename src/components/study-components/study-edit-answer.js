'use strict';

import React from 'react';
import {connect} from 'react-redux';
import * as studyActions from '../../actions/study-actions';
import * as traverse from '../../actions/traversing-actions';
import {editFlashcard} from '../../actions/profile-actions';

const StudyAnswerQuestion = props => {
    var answer;
    function edit() {
        const payload = {
            answer: answer.value,
            question: props.flashcards[props.study.counter].question,
            flash_card_deck_id: props.flashcards[props.study.counter].flash_card_deck_id,
            flash_card_id: props.flashcards[props.study.counter].flash_card_id
        };
        props.editFlashcard(payload);
        props.edit();
    }
    return (
        <div>
            <div className='study-edit-back'>
                <input className='button is-primary is-outlined' type="button" value="Update" onClick={edit}/>
                <input className='button is-danger is-outlined' type="button" value='back' onClick={props.edit}/>
            </div>
            <textarea className='textarea-question' name="" id="edit-study-flashcard-answer" ref={i=>{answer=i}} cols="30" rows="10">{props.flashcards[props.study.counter].answer}</textarea>
        </div>
    )
}

export default connect(({flashcards, study}) => ({flashcards, study}), {
    ...studyActions,
    ...traverse,
    editFlashcard
})(StudyAnswerQuestion)
