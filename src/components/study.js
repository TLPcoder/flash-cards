'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import StudyQuestion from './study-question';
import StudyAnswer from './study-answer';
import * as studyActions from '../actions/study-actions';

const Study = props => {
    if (props.study.question) {
        return (
            <div><StudyQuestion/></div>
        )
    } else {
        return (
            <div><StudyAnswer/></div>
        )
    }
};

export default connect(({flashcards, traverse, study}) => ({flashcards, traverse, study}), studyActions)(Study)
