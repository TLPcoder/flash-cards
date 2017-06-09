'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import AddDeck from './add-deck';
import EditDeck from './edit-deck';
import BuildDeck from './build-deck';

const DeckMain = props => {
    if (props.traverse.decks.add) {
        return (
            <div>
                <AddDeck location={props.router.location}/>
                <BuildDeck decks={{
                    data: props.decks,
                    deleteDeck: props.router.deleteDeck
                }}/>
            </div>
        )
    } else if (props.traverse.decks.edit.editDeck) {
        return (
            <div>
                <EditDeck edit={{
                    router: props.router
                }}/>
                <input type="button" value='Add' onClick={() => {
                    props.addDeckTraverse(!props.traverse.decks.add)
                }}/>
                <BuildDeck decks={{
                    data: props.decks,
                    deleteDeck: props.router.deleteDeck
                }}/>
            </div>
        )
    } else {
        return (
            <div>
                <input type="button" value='Add' onClick={() => {
                    props.addDeckTraverse(!props.traverse.decks.add)
                }}/>
                <BuildDeck decks={{
                    data: props.decks,
                    deleteDeck: props.router.deleteDeck
                }}/>
            </div>
        )
    }
}

export default connect(({decks, traverse}) => ({decks, traverse}), {
    ...profileActions,
    ...traverse
})(DeckMain);
