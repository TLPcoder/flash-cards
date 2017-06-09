'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import AddFlashcard from './add-flashcard';
import BuildFlashCards from './build-flashcards';
import EditFlashcard from './edit-flashcard';

const FlashCards = props => {
    if (props.traverse.flashcards.add) {
        return (
            <div>
                <AddFlashcard add={{
                    location: props.flashcard.location,
                }}/>
                <BuildFlashCards flashcards={{
                    data: props.flashcards,
                    deleteFlashCard: props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    }
    if (props.traverse.flashcards.edit.editFlashcard) {
        return (
            <div>
                <EditFlashcard edit={{
                    location: props.flashcard.location,
                }}/>
                <BuildFlashCards flashcards={{
                    data: props.flashcards,
                    deleteFlashCard: props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    } else {
        return (
            <div>
                <input type="button" value='Add' onClick={() => {
                    props.addFlashcardTraverse(!props.traverse.flashcards.add)
                }}/>
                <BuildFlashCards flashcards={{
                    data: props.flashcards,
                    deleteFlashCard: props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    }
}

export default connect(({flashcards, traverse}) => ({flashcards, traverse}), {
    ...profileActions,
    ...traverse
})(FlashCards);
