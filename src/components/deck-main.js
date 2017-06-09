'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../actions/profile-actions';
import AddDeck from './add-deck';
import EditDeck from './edit-deck';
import BuildDeck from './build-deck';

export class DeckMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: false,
            edit: {
                editDeck: false,
                deckID: null
            }
        };
    }
    editDeck = (event) => {
        event === undefined
            ? this.setState({
                edit: {
                    editDeck: !this.state.edit.editDeck,
                    deckID: null
                }
            })
            : this.setState({
                edit: {
                    editDeck: !this.state.edit.editDeck,
                    deckID: event.target.name
                }
            });
    }
    addDeck = () => {
        this.setState({
            add: !this.state.add
        });
    }
    deleteDeck = (event) => {
        const payload = {
            method: 'DELETE',
            url: `http://localhost:8000/flashcards/delete_flash_card_deck`,
            body: {
                field_of_study_id: Number(this.props.router.location.pathname.split('/')[2]),
                flash_card_deck_id: event.target.name
            }
        };
        this.props.deleteUserDeck(payload);
    }
    render() {
        if (this.state.add) {
            return (
                <div>
                    <AddDeck added={this.addDeck} location={this.props.router.location}/>
                    <BuildDeck decks={{
                        data: this.props.decks,
                        editDeck: this.editDeck,
                        deleteDeck: this.deleteDeck
                    }}/>
                </div>
            )
        } else if (this.state.edit.editDeck) {
            return (
                <div>
                    <EditDeck edit={{
                        edited: this.editDeck,
                        editID: this.state.edit.deckID,
                        router: this.props.router
                    }}/>
                    <input type="button" value='Add' onClick={this.addDeck}/>
                    <BuildDeck decks={{
                        data: this.props.decks,
                        editDeck: this.editDeck,
                        deleteDeck: this.deleteDeck
                    }}/>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value='Add' onClick={this.addDeck}/>
                    <BuildDeck decks={{
                        data: this.props.decks,
                        editDeck: this.editDeck,
                        deleteDeck: this.deleteDeck
                    }}/>
                </div>
            )
        }
    }
}

export default connect(({decks}) => ({decks}), profileActions)(DeckMain);
