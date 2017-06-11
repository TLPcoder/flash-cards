'use strict';

import React from 'react';
import {connect} from 'react-redux';
import * as studyActions from '../actions/study-actions';
import * as traverse from '../actions/traversing-actions';
import {editFlashcard} from '../actions/profile-actions';

const StudyEditQuestion = props => {
    function edit() {
        const payload = {
            answer: props.flashcards[props.study.counter].answer,
            question: document.getElementById('edit-study-flashcard-question').value,
            flash_card_deck_id: props.flashcards[props.study.counter].flash_card_deck_id,
            flash_card_id: props.flashcards[props.study.counter].flash_card_id
        };
        props.editFlashcard(payload);
        props.edit();
    }
    console.log('StudyEditQuestion', props);
    return (
        <div>
            <div className='study-edit-back'>
                <input className='button is-primary is-outlined' type="button" value='back' onClick={props.edit}/>
                <input className='button is-danger is-outlined' type="button" value="edit" onClick={() => edit()}/>
            </div>
            <textarea className='textarea-question' name="" id="edit-study-flashcard-question" cols="30" rows="10">{props.flashcards[props.study.counter].question}</textarea>
        </div>
    )
}

export default connect(({flashcards, study}) => ({flashcards, study}), {
    ...studyActions,
    ...traverse,
    editFlashcard
})(StudyEditQuestion)
