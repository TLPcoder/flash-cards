'use strict';
import React from 'react';

const BuildFlashCards = props => {
    function buildFlashcards() {
        return props.flashcards.map(el => {
            return (
                <div className='flashcard-display'>
                    <input type="button" value="edit"/>
                    <input type="button" value="delete"/>
                    <div>
                        <h4>{el.question}</h4>
                        <h4>{el.answer}</h4>
                    </div>
                </div>
            )
        })
    }
    return (<div>{buildFlashcards()}</div>)
}

export default BuildFlashCards;
