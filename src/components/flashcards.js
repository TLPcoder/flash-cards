'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../actions/profile-actions';
import AddFlashcard from './add-flashcard';
import BuildFlashCards from './build-flashcards';
import EditFlashcard from './edit-flashcard';

export class FlashCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: false,
            edit: {
                edited: false,
                editID: null
            },
            view: false
        };
    }
    componentWillMount = () => {
        const payload = {
            method: 'GET',
            url: `http://localhost:8000/flashcards/flash_card_cards/${this.props.location.pathname.split('/')[2]}`
        };
        this.props.getFlashCards(payload);
    }
    add = () => {
        this.setState(state => ({
            add: !state.add
        }));
    }
    edit = (event) => {
        event === undefined
            ? this.setState({
                edit: {
                    edited: !this.state.edit.edited,
                    editID: null
                }
            })
            : this.setState({
                edit: {
                    edited: !this.state.edit.edited,
                    editID: event.target.name
                }
            });
    }
    deleteFlashCard = (event) => {
        const payload = {
            flash_card_id: event.target.name,
            flash_card_deck_id: this.props.location.pathname.split('/')[2]
        };
        this.props.deleteFlashcard(payload);
    }
    render() {
        if (this.state.add) {
            return (
                <div>
                    <AddFlashcard add={{
                        location: this.props.location,
                        added: this.add
                    }}/>
                    <BuildFlashCards flashcards={{
                        data: this.props.flashcards,
                        edit: this.edit,
                        deleteFlashCard: this.deleteFlashCard
                    }}/>
                </div>
            )
        }
        if (this.state.edit.edited) {
            return (
                <div>
                    <EditFlashcard edit={{
                        location: this.props.location,
                        edited: this.edit,
                        editID: this.state.edit.editID
                    }}/>
                    <BuildFlashCards flashcards={{
                        data: this.props.flashcards,
                        edit: this.edit,
                        deleteFlashCard: this.deleteFlashCard
                    }}/>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value='Add' onClick={this.add}/>
                    <BuildFlashCards flashcards={{
                        data: this.props.flashcards,
                        edit: this.edit,
                        deleteFlashCard: this.deleteFlashCard
                    }}/>
                </div>
            )
        }
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(FlashCards);
