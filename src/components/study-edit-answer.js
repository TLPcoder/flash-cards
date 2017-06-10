'use strict';

import React from 'react';
import {connect} from 'react-redux';
import * as studyActions from '../actions/study-actions';
import * as traverse from '../actions/traversing-actions';
import {editFlashcard} from '../actions/profile-actions';

const StudyAnswerQuestion = props => {
    function edit() {
        const payload = {
            answer: document.getElementById('edit-study-flashcard-answer').value,
            question: props.flashcards[props.study.counter].question,
            flash_card_deck_id: props.flashcards[props.study.counter].flash_card_deck_id,
            flash_card_id: props.flashcards[props.study.counter].flash_card_id
        };
        props.editFlashcard(payload);
        props.edit();
    }
    console.log('StudyAnswerQuestion', props);
    return (
        <div>
            <textarea name="" id="edit-study-flashcard-answer" cols="30" rows="10">{props.flashcards[props.study.counter].answer}</textarea>
            <input type="button" value="back" onClick={props.edit}/>
            <input type="button" value='Update' onClick={edit}/>
        </div>
    )
}

export default connect(({flashcards, study}) => ({flashcards, study}), {
    ...studyActions,
    ...traverse,
    editFlashcard
})(StudyAnswerQuestion)
