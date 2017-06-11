'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import AddDeck from './add-deck';
import EditDeck from './edit-deck';
import BuildDeck from './build-deck';
import NavBar from './nav-bar';

const DeckMain = props => {
    if (props.traverse.decks.add) {
        return (
            <div>
                <div className='nav-bar-main'>
                    <div className='level'>
                        <div className='level-right'>
                            <AddDeck className='level-item' location={props.router.location}/>
                        </div>
                        <div className='level-left'>
                            <NavBar router={{
                                location: props.router.location
                            }} className='level-item'/>
                        </div>
                    </div>
                </div>
                <div className='deck-container'>
                    <BuildDeck decks={{
                        data: props.decks,
                        deleteDeck: props.router.deleteDeck
                    }}/>
                </div>
            </div>
        )
    } else if (props.traverse.decks.edit.editDeck) {
        return (
            <div>
                <div className='nav-bar-main'>
                    <div className='level'>
                        <div className='level-left'>
                            <EditDeck className='level-item' edit={{
                                router: props.router
                            }}/>
                        </div>
                        <div className='level-right'>
                            <NavBar className='level-item' router={{
                                location: props.router.location
                            }} className='level-item'/>
                        </div>
                    </div>
                </div>
                <div className='deck-container'>
                    <BuildDeck decks={{
                        data: props.decks,
                        deleteDeck: props.router.deleteDeck
                    }}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='nav-bar-main'>
                    <div className='level'>
                        <div className='level-left'>
                            <input className='level-item button is-primary is-outlined add-deck' type="button" value='Add' onClick={() => {
                                props.addDeckTraverse(!props.traverse.decks.add)
                            }}/>
                        </div>
                        <div className='level-right'>
                            <NavBar className='level-item' router={{
                                location: props.router.location
                            }} className='level-item'/>
                        </div>
                    </div>
                </div>
                <div className='deck-container'>
                    <BuildDeck decks={{
                        data: props.decks,
                        deleteDeck: props.router.deleteDeck
                    }}/>
                </div>
            </div>
        )
    }
}

export default connect(({decks, traverse}) => ({decks, traverse}), {
    ...profileActions,
    ...traverse
})(DeckMain);
