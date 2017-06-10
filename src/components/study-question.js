'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as studyActions from '../actions/study-actions';
import * as traverse from '../actions/traversing-actions';
import {editFlashcard} from '../actions/profile-actions';
import StudyEditQuestion from './study-edit-question';

export class StudyQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }
    edit = () => {
        this.setState({edit:!this.state.edit});
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
        if (this.state.edit) {
            return (
                <div>
                    <StudyEditQuestion edit={this.edit}/>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value='previous' onClick={this.previous}/>
                    <h4 onClick={this.props.answerFlashcard}>{this.props.flashcards[this.props.study.counter].question}</h4>
                    <input type="button" value='next' onClick={this.next}/>
                    <input type="button" value="back" onClick={this.props.studyFlashcardTraverse}/>
                <input type="button" value='edit' onClick={this.edit}/>
                </div>
            )
        }
    }
}

export default connect(({flashcards, study}) => ({flashcards, study}), {
    ...studyActions,
    ...traverse,
    editFlashcard
})(StudyQuestion)
