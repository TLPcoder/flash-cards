'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as traverse from '../actions/traversing-actions';
import FaClose from 'react-icons/lib/fa/close';
import FaEdit from 'react-icons/lib/fa/edit';

const BuildFlashCards = props => {
    console.log('BuildFlashCards', props);
    function editFlashcard({target}) {
        var answer = document.getElementById('flashcard-answer').innerText.split('').slice(0,document.getElementById('flashcard-answer').innerText.split('').length-3).join('')
        props.editFlashcardTraverse({
            editFlashcard: !props.traverse.flashcards.edit.editFlashcard,
            flashcarID: target.name,
            question: document.getElementById('flashcard-question').innerText,
            answer: answer
        });
    }
    function buildFlashcards() {
        return props.flashcards.data.map(el => {
            return (
                <div className='flashcard-display'>
                    <div className='flashcard-container'>
                        <div className='level flashcard-contolers'>
                            <div className='level-left'></div>
                            <div className='level-right'>
                                <button className='is-primary is-outlined level-item' id='edit-button' name={el.flash_card_id} onClick={editFlashcard}>Edit</button>
                                <button className='delete delete-button' name={el.flash_card_id} onClick={props.flashcards.deleteFlashCard}></button>
                            </div>
                        </div>
                        <h4 className='level-item' id='flashcard-question'>{el.question.slice(0, 40)}</h4>
                        <br/>
                        <h4 id='flashcard-answer'>{el.answer.slice(0, 50)}...</h4>
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
