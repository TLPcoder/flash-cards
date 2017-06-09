'use strict';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';

export class AddFlashcard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            question: ''
        };
    }
    changeState = ({ target }) => {
        if (target.id === 'add-flashcard-answer') {
            this.setState({answer: target.value});
        } else {
            this.setState({question: target.value});
        }
    }
    addFlashcard = () => {
        const { answer, question } = this.state;

        const payload = {
            answer,
            question,
            flash_card_deck_id: this.props.add.location.pathname.split('/')[2]
        };
        this.props.addFlashcard(payload);
        this.props.add.added();
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeState} placeholder='question' id='add-flashcard-question'/>
                <input type="text" onChange={this.changeState} placeholder='answer' id='add-flashcard-answer'/>
                <input type="button" value='Create' onClick={this.addFlashcard}/>
            </div>
        )
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(AddFlashcard);
