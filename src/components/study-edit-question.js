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
            <textarea name="" id="edit-study-flashcard-question" cols="30" rows="10">{props.flashcards[props.study.counter].question}</textarea>
            <input type="button" value="back" onClick={props.edit}/>
            <input type="button" value='Update' onClick={() => edit()}/>
        </div>
    )
}

export default connect(({flashcards, study}) => ({flashcards, study}), {
    ...studyActions,
    ...traverse,
    editFlashcard
})(StudyEditQuestion)
