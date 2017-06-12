'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import AddFlashcard from './add-flashcard';
import BuildFlashCards from './build-flashcards';
import EditFlashcard from './edit-flashcard';
import StudyNavBar from './study-nav-bar';
import Study from './study';
import NavBar from './nav-bar';

const FlashCards = props => {
    if (props.flashcards.length === 0 && props.traverse.flashcards.add) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'></div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Flashcards</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='center-flashcard'>
                    <AddFlashcard className='level-item' add={{
                        location: props.flashcard.location
                    }}/>
                </div>
            </div>
        )
    } else if (props.flashcards.length === 0) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'></div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Flashcards</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='center-flashcard-button'>
                    <input className='button is-large is-primary is-outlined' type="button" value='Add First Flashcard' onClick={() => {
                        props.addFlashcardTraverse(!props.traverse.flashcards.add)
                    }}/>
                </div>
            </div>
        )
    } else if (props.traverse.flashcards.add) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item fix-nav'>
                                <AddFlashcard add={{
                                    location: props.flashcard.location
                                }}/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Flashcards</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='flashcard-container'>
                    <BuildFlashCards flashcards={{
                        data: props.flashcards,
                        deleteFlashCard: props.flashcard.deleteFlashCard
                    }}/>
                </div>
            </div>
        )
    } else if (props.traverse.flashcards.edit.editFlashcard) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item fix-nav'>
                                <EditFlashcard edit={{
                                    location: props.flashcard.location
                                }}/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Flashcards</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='flashcard-container'>
                    <BuildFlashCards flashcards={{
                        data: props.flashcards,
                        deleteFlashCard: props.flashcard.deleteFlashCard
                    }}/>
                </div>
            </div>
        )
    } else if (props.traverse.flashcards.study) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <StudyNavBar/>
                </div>
                <Study/>
            </div>
        )
    } else {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item fix-nav'>
                                <input className='button is-primary is-outlined flashcard-buttons' type="button" value='Study' onClick={() => {
                                    props.studyFlashcardTraverse(!props.traverse.flashcards.study)
                                }}/>
                                <input className='button is-danger is-outlined flashcard-buttons-1' type="button" value='Add' onClick={() => {
                                    props.addFlashcardTraverse(!props.traverse.flashcards.add)
                                }}/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Flashcards</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='flashcard-container'>
                    <BuildFlashCards flashcards={{
                        data: props.flashcards,
                        deleteFlashCard: props.flashcard.deleteFlashCard
                    }}/>
                </div>
            </div>
        )
    }
}

export default connect(({flashcards, traverse}) => ({flashcards, traverse}), {
    ...profileActions,
    ...traverse
})(FlashCards);
