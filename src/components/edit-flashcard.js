'use strict';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';

export class EditFlashcard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            question: ''
        };
    }
    changeState = ({target}) => {
        if (target.id === 'edit-flashcard-answer') {
            this.setState({answer: target.value});
        } else {
            this.setState({question: target.value});
        }
    }
    editFlashcard = () => {

        const {answer, question} = this.state;

        const payload = {
            answer,
            question,
            flash_card_deck_id: this.props.edit.location.pathname.split('/')[2],
            flash_card_id: this.props.edit.editID
        };
        this.props.editFlashcard(payload);
        this.props.edit.edited()
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeState} placeholder='question' id='edit-flashcard-question'/>
                <input type="text" onChange={this.changeState} placeholder='answer' id='edit-flashcard-answer'/>
                <input type="button" value='Update' onClick={this.editFlashcard}/>
                <input type="button" value='back' onClick={this.props.edit.edited}/>
            </div>
        )
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(EditFlashcard);
