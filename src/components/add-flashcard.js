'use strict';
import React, {pureComponet}from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';

const AddFlashcard = props => {
    function addFlashcard(){
        const payload = {
            method: 'POST',
            url: 'http://localhost:8000/flashcards/create_flash_card',
            body: {
                answer: document.getElementById('add-flashcard-answer').value,
                question: document.getElementById('add-flashcard-question').value,
                flash_card_deck_id:props.add.location.pathname.split('/')[2]
            }
        };
        props.addFlashcard(payload);
        props.add.added();
    }
    console.log(props);
    return (
        <div>
            <input type="text" placeholder='question' id='add-flashcard-question'/>
            <input type="text" placeholder='answer' id='add-flashcard-answer'/>
            <input type="button" value='Create' onClick={addFlashcard}/>
        </div>
    )
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(AddFlashcard);
