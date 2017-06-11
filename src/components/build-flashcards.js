'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as traverse from '../actions/traversing-actions';

const BuildFlashCards = props => {
    console.log('BuildFlashCards', props);
    function editFlashcard({target}) {
        props.editFlashcardTraverse({
            editFlashcard: !props.traverse.flashcards.edit.editFlashcard,
            flashcarID: target.name,
            question: document.getElementById('flashcard-question').value,
            answer:document.getElementById('flashcard-answer').value
        });
    }
    function buildFlashcards() {
        return props.flashcards.data.map(el => {
            return (
                <div className='flashcard-display'>
                    <div>
                        <h4 id='flashcard-question'>{el.question}</h4>
                        <br/>
                        <h4 id='flashcard-answer'>{el.answer}</h4>
                    </div>
                    <input className='button is-primary is-outlined' type="button" value="edit" name={el.flash_card_id} onClick={editFlashcard}/>
                    <input className='button is-danger is-outlined' type="button" value="delete" name={el.flash_card_id} onClick={props.flashcards.deleteFlashCard}/>
                </div>
            )
        })
    }
    return (
        <div>{buildFlashcards()}</div>
    )
}

export default connect(({traverse}) => ({traverse}), traverse)(BuildFlashCards);
