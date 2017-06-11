'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import AddFlashcard from './add-flashcard';
import BuildFlashCards from './build-flashcards';
import EditFlashcard from './edit-flashcard';
import Study from './study';
import NavBar from './nav-bar';

const FlashCards = props => {
    if (props.traverse.flashcards.add) {
        return (
            <div>
                <div className='level'>
                    <div className='level-left'>
                        <AddFlashcard className='level-item' add={{
                            location: props.flashcard.location
                        }}/>
                    </div>
                    <div className='level-right'>
                        <NavBar className='level-item'/>
                    </div>
                </div>
                <BuildFlashCards flashcards={{
                    data: props.flashcards,
                    deleteFlashCard: props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    } else if (props.traverse.flashcards.edit.editFlashcard) {
        return (
            <div>
                <div className='level'>
                    <div className='level-left'>
                        <EditFlashcard className='level-item' edit={{
                            location: props.flashcard.location
                        }}/>
                    </div>
                    <div className='level-right'>
                        <NavBar className='level-item'/>
                    </div>
                </div>
                <BuildFlashCards flashcards={{
                    data: props.flashcards,
                    deleteFlashCard: props.flashcard.deleteFlashCard
                }}/>
            </div>
        )
    } else if (props.traverse.flashcards.study) {
        return (<Study/>)
    } else {
        return (
            <div>
                <div className='level'>
                    <div className='level-left'>
                        <div className='level-item'>
                            <input type="button" value='Study' onClick={() => {
                                props.studyFlashcardTraverse(!props.traverse.flashcards.study)
                            }}/>
                            <input type="button" value='Add' onClick={() => {
                                props.addFlashcardTraverse(!props.traverse.flashcards.add)
                            }}/>
                        </div>
                    </div>
                    <div className='level-right'>
                        <NavBar className='level-item'/>
                    </div>
                </div>
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
