'use strict';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';

export class EditFlashcard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answer: this.props.traverse.flashcards.edit.answer,
            question: this.props.traverse.flashcards.edit.question
        };
    }
    changeState = ({target}) => {
        if (target.id === 'edit-flashcard-answer') {
            this.setState({answer: target.value});
        } else {
            this.setState({question: target.value});
        }
    }
    editedFlashCard = () => {
        this.props.editFlashcardTraverse({
            editFlashcard: !this.props.traverse.flashcards.edit.editFlashcard,
            flashcarID: this.props.traverse.flashcards.edit.flashcarID
        })
    }
    editFlashcard = () => {

        const {answer, question} = this.state;

        const payload = {
            answer,
            question,
            flash_card_deck_id: this.props.edit.location.pathname.split('/')[2],
            flash_card_id: this.props.traverse.flashcards.edit.flashcarID
        };
        console.log('payload bro', payload);
        this.props.editFlashcard(payload);
        this.editedFlashCard();
    }
    render() {
        return (
            <div className='edit-flashcard-main'>
                <div className='level'>
                    <div className='level-left'>
                        <input className='level-item input' type="text" onChange={this.changeState} placeholder='question' id='edit-flashcard-question'/>
                    </div>
                    <div className='level-left'>
                        <input className='level-item input move-left' type="text" onChange={this.changeState} placeholder='answer' id='edit-flashcard-answer'/>
                    </div>
                    <div className='level-left flashcard-edit-controller'>
                        <input className='level-item button is-primary  is-outlined move-left' type="button" value='Update' onClick={this.editFlashcard}/>
                        <input className='level-item button is-danger is-outlined' type="button" value='back' onClick={this.editedFlashCard}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(({flashcards, traverse}) => ({flashcards, traverse}), {
    ...profileActions,
    ...traverse
})(EditFlashcard);
