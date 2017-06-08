'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../actions/profile-actions';
import AddFlashcard from './add-flashcard';
import BuildFlashCards from './build-flashcards';

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
    add = () => {
        this.setState({
            add: !this.state.add
        });
    }
    edit = () => {}
    deleteFlashCard = (event) => {
        const payload = {
            method: "DELETE",
            url: '',
            body: {
                flash_card_id: event.target.name
            }
        };
        // this.props.deleteFlashcard(payload);
    }

    componentWillMount = () => {
        const payload = {
            method: 'GET',
            url: `http://localhost:8000/flashcards/flash_card_cards/${this.props.location.pathname.split('/')[2]}`
        };
        this.props.getFlashCards(payload);
    }
    render() {
        if (this.state.add) {
            return (
                <div>
                    <AddFlashcard add={{
                        location: this.props.location,
                        added: this.add
                    }}/>
                    <BuildFlashCards flashcards={this.props.flashcards}/>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value='Add' onClick={this.add}/>
                    <BuildFlashCards flashcards={this.props.flashcards}/>
                </div>
            )
        }
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(FlashCards);
