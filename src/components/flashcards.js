'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../actions/profile-actions';

export class FlashCards extends Component{
    constructor(props){
        super(props);
        this.buildFlashcards = this.buildFlashcards.bind(this);
    }
    componentWillMount(){
        const payload = {
            method:'GET',
            url: `http://localhost:8000/flashcards/flash_card_cards/${this.props.location.pathname.split('/')[2]}`
        };
        this.props.getFlashCards(payload);
    }
    buildFlashcards(){
        console.log('flashcards', this.props);
        return this.props.flashcards.map(el => {
            return (
                <div className ='flashcard-display'>
                    <h4>{el.question}</h4>
                    <h4>{el.answer}</h4>
                </div>
            )
        })
    }
    render(){
        console.log(this.props);
        return (
            <div>{this.buildFlashcards()}</div>
        )
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(FlashCards);
