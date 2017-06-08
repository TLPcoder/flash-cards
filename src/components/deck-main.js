'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../actions/profile-actions';
import AddDeck from './add-deck';

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
    editDeck = () => {}
    addDeck = () => {
        console.log('state', this.state);
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
    buildDecks = () => {
        return this.props.decks.map(el => {
            var toFlash = `/flashcards/${el.flash_card_deck_id}`;
            return (
                <div>
                    <input type="button" value='edit' onClick={this.editDeck}/>
                    <input type="button" value='delete' name={el.flash_card_deck_id} onClick={this.deleteDeck}/>
                    <Link className='deck-card' to={toFlash}>
                        <h4>{el.flash_card_deck_name}</h4>
                    </Link>
                </div>
            )
        });
    }
    render() {
        if (this.state.add) {
            return (
                <div>
                    <AddDeck added={this.addDeck} location={this.props.router.location}/>
                    {this.buildDecks()}
                </div>
            )
        } else if (this.state.edit.editDeck) {
            return (
                <div>
                    <input type="button" value='Add' onClick={this.addDeck}/> {this.buildDecks()}
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value='Add' onClick={this.addDeck}/> {this.buildDecks()}
                </div>
            )
        }
    }
}

export default connect(({decks}) => ({decks}), profileActions)(DeckMain);
