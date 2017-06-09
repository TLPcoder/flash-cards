'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../actions/profile-actions';
import AddDeck from './add-deck';
import EditDeck from './edit-deck';
import BuildDeck from './build-deck';
import * as traverse from '../actions/traversing-actions';

export class DeckMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: {
                editDeck: false,
                deckID: null
            }
        };
    }
    render() {
        console.log('adslkjfakdsfhkjdsahfkljasdfhm', this.props);
        if (this.props.traverse.decks.add) {
            return (
                <div>
                    <AddDeck location={this.props.router.location}/>
                    <BuildDeck decks={{
                        data: this.props.decks,
                        deleteDeck: this.props.router.deleteDeck
                    }}/>
                </div>
            )
        } else if (this.props.traverse.decks.edit.editDeck) {
            return (
                <div>
                    <EditDeck edit={{
                        router: this.props.router
                    }}/>
                    <input type="button" value='Add' onClick={() => {
                        this.props.addDeckTraverse(!this.props.traverse.decks.add)
                    }}/>
                    <BuildDeck decks={{
                        data: this.props.decks,
                        deleteDeck: this.props.router.deleteDeck
                    }}/>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value='Add'  onClick={() => {
                        this.props.addDeckTraverse(!this.props.traverse.decks.add)
                    }}/>
                    <BuildDeck decks={{
                        data: this.props.decks,
                        deleteDeck: this.props.router.deleteDeck
                    }}/>
                </div>
            )
        }
    }
}

export default connect(({decks, traverse}) => ({decks, traverse}), {
    ...profileActions,
    ...traverse
})(DeckMain);
