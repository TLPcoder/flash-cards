'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import AddFlashcard from './add-flashcard';
import BuildFlashCards from './build-flashcards';
import EditFlashcard from './edit-flashcard';

const FlashCards = props => {
    if (props.flashcard.flashState.add) {
        return (
            <div>
                <AddFlashcard add={{
                    location:props.flashcard.location,
                    added:props.flashcard.add
                }}/>
                <BuildFlashCards flashcards={{
                    data:props.flashcards,
                    edit:props.flashcard.edit,
                    deleteFlashCard: props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    }
    if (props.flashcard.flashState.edit.edited) {
        return (
            <div>
                <EditFlashcard edit={{
                    location:props.flashcard.location,
                    edited:props.flashcard.edit,
                    editID:props.flashcard.flashState.edit.editID
                }}/>
                <BuildFlashCards flashcards={{
                    data:props.flashcards,
                    edit:props.flashcard.edit,
                    deleteFlashCard: props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    } else {
        return (
            <div>
                <input type="button" value='Add' onClick={props.flashcard.add}/>
                <BuildFlashCards flashcards={{
                    data:props.flashcards,
                    edit:props.flashcard.edit,
                    deleteFlashCard:props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(FlashCards);
