'use strict';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';

export class AddFlashcard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            question: ''
        };
    }
    changeState = ({target}) => {
        if (target.id === 'add-flashcard-answer') {
            this.setState({answer: target.value});
        } else {
            this.setState({question: target.value});
        }
    }
    addFlashcard = () => {
        const {answer, question} = this.state;

        const payload = {
            answer,
            question,
            flash_card_deck_id: this.props.add.location.pathname.split('/')[2]
        };
        this.props.addFlashcard(payload);
        this.props.addFlashcardTraverse(!this.props.traverse.flashcards.add)
    }
    back = () => {
        this.props.addFlashcardTraverse(!this.props.traverse.flashcards.add)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeState} placeholder='question' id='add-flashcard-question'/>
                <input type="text" onChange={this.changeState} placeholder='answer' id='add-flashcard-answer'/>
                <input type="button" value='Create' onClick={this.addFlashcard}/>
                <input type="button" value="Back" onClick={this.back}/>
            </div>
        )
    }
}

export default connect(({flashcards, traverse}) => ({flashcards, traverse}), {
    ...profileActions,
    ...traverse
})(AddFlashcard);
