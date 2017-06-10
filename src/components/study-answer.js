'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as studyActions from '../actions/study-actions';

export class StudyAnswer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('answer props', this.props);
        return (
            <div>
                <input type="button" value='back' onClick={this.props.backFlashcard}/>
                <h4 onClick={this.props.questionFlashcard}>{this.props.flashcards[this.props.study.counter].answer}</h4>
            <input type="button" value='next' onClick={this.props.nextFlashcard}/>
            </div>
        )
    }
}

export default connect(({flashcards, traverse, study}) => ({flashcards, traverse, study}), studyActions)(StudyAnswer)
