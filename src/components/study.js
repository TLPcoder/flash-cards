'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import StudyFlashcard from './study-flashcard';

export class Study extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    render() {
        console.log('study props', this.props);
        return (<StudyFlashcard counter={this.state.counter}/>)
    }
}

export default connect(({flashcards, traverse}) => ({flashcards, traverse}))(Study)
