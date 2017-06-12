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
    if (props.decks.length === 0 && props.traverse.decks.add) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'></div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Deck</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar router={{
                                    location: props.router.location
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='center-deck'>
                    <AddDeck location={props.router.location}/>
                </div>
            </div>
        )
    } else if (props.traverse.decks.add) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item fix-nav'>
                                <AddDeck location={props.router.location}/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Deck</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar className='nav-item' router={{
                                    location: props.router.location
                                }}/>
                            </div>
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
    } else if (props.decks.length === 0) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'></div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Deck</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar router={{
                                    location: props.router.location
                                }} className='nav-item'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input className='center-deck-button is-large level-item button is-primary is-outlined add-deck' type="button" value='Add First Deck' onClick={() => {
                        props.addDeckTraverse(!props.traverse.decks.add)
                    }}/>
                </div>
            </div>
        )
    } else if (props.traverse.decks.edit.editDeck) {
        return (
            <div>
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item fix-nav'>
                                <EditDeck edit={{
                                    router: props.router
                                }}/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Deck</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar router={{
                                    location: props.router.location
                                }}/>
                            </div>
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
                <div id="background-image"></div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item'>
                                <input className='button fix-nav is-primary is-outlined add-deck' type="button" value='Add' onClick={() => {
                                    props.addDeckTraverse(!props.traverse.decks.add)
                                }}/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Deck</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar router={{
                                    location: props.router.location
                                }}/>
                            </div>
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
