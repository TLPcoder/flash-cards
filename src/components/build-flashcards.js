'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as traverse from '../actions/traversing-actions';

const BuildFlashCards = props => {
    console.log('BuildFlashCards', props);
    function editFlashcard({target}){
        console.log(target);
        props.editFlashcardTraverse({
            editFlashcard: !props.traverse.flashcards.edit.editFlashcard,
            flashcarID: target.name
        });
    }
    function buildFlashcards() {
        return props.flashcards.data.map(el => {
            return (
                <div className='flashcard-display'>
                    <input type="button" value="edit" name={el.flash_card_id} onClick={editFlashcard}/>
                    <input type="button" value="delete" name={el.flash_card_id} onClick={props.flashcards.deleteFlashCard}/>
                    <div>
                        <h4>{el.question}</h4>
                        <h4>{el.answer}</h4>
                    </div>
                </div>
            )
        })
    }
    return (
        <div>{buildFlashcards()}</div>
    )
}

export default connect(({traverse}) => ({traverse}), traverse)(BuildFlashCards);
