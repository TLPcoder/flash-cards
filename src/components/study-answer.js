'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as studyActions from '../actions/study-actions';
import * as traverse from '../actions/traversing-actions';
import {editFlashcard} from '../actions/profile-actions';

export class StudyAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }
    edit = () => {
        const payload = {
            answer: document.getElementById('edit-study-flashcard-answer').value,
            question: this.props.flashcards[this.props.study.counter].question,
            flash_card_deck_id: this.props.flashcards[this.props.study.counter].flash_card_deck_id,
            flash_card_id: this.props.flashcards[this.props.study.counter].flash_card_id
        };
        this.props.editFlashcard(payload);
        this.setState({
            edit: !this.state.edit
        })
    }
    previous = () => {
        if (this.props.study.counter === 0) {
            this.props.counterFlashcard(this.props.flashcards.length - 1);
            this.props.questionFlashcard()
        } else {
            this.props.backFlashcard()
            this.props.questionFlashcard()
        }
    }
    next = () => {
        if (this.props.study.counter === this.props.flashcards.length - 1) {
            this.props.counterFlashcard(0);
            this.props.questionFlashcard()
        } else {
            this.props.nextFlashcard()
            this.props.questionFlashcard()
        }
    }
    render() {
        console.log(this.props);
        if (this.state.edit) {
            return (
                <div>
                    <textarea name="" id="edit-study-flashcard-answer" cols="30" rows="10">{this.props.flashcards[this.props.study.counter].answer}</textarea>
                    <input type="button" value="back" onClick={() => this.setState({
                        edit: !this.state.edit
                    })}/>
                    <input type="button" value='Update' onClick={() => this.edit()}/>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value='previous' onClick={this.previous}/>
                    <h4 onClick={this.props.questionFlashcard}>{this.props.flashcards[this.props.study.counter].answer}</h4>
                    <input type="button" value='next' onClick={this.next}/>
                    <input type="button" value="back" onClick={this.props.studyFlashcardTraverse}/>
                    <input type="button" value='edit' onClick={() => {
                        this.setState({
                            edit: !this.state.edit
                        })
                    }}/>
                </div>
            )
        }
    }
}

export default connect(({flashcards, traverse, study}) => ({flashcards, traverse, study}), {
    ...studyActions,
    ...traverse,
    editFlashcard
})(StudyAnswer)
