'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as studyActions from '../actions/study-actions';
import * as traverse from '../actions/traversing-actions';
import {editFlashcard} from '../actions/profile-actions';
import StudyAnswerQuestion from './study-edit-answer';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

export class StudyAnswer extends Component {
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
            this.props.questionFlashcard();
        } else {
            this.props.backFlashcard();
            this.props.questionFlashcard();
        }
    }
    next = () => {
        if (this.props.study.counter === this.props.flashcards.length - 1) {
            this.props.counterFlashcard(0);
            this.props.questionFlashcard();
        } else {
            this.props.nextFlashcard();
            this.props.questionFlashcard();
        }
    }
    render() {
        console.log(this.props);
        if (this.state.edit) {
            return (
                <div>
                    <StudyAnswerQuestion edit={this.edit}/>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='study-edit-back'>
                            <input className='button is-primary is-outlined' type="button" value='edit' onClick={this.edit}/>
                            <input className='button is-danger is-outlined' type="button" value="back" onClick={this.props.studyFlashcardTraverse}/>
                    </div>
                    <div className='columns study-view-answer'>
                        <div className='column is-2'>
                            <button className='study-controls' onClick={this.previous}><FaAngleLeft/></button>
                        </div>
                        <div className='column is-8'>
                            <h4 onClick={this.props.questionFlashcard}>{this.props.flashcards[this.props.study.counter].answer}</h4>
                        </div>
                        <div className='column is-2'>
                            <button className='study-controls' onClick={this.next}><FaAngleRight/></button>
                        </div>
                    </div>
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
