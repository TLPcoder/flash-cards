'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import FlashCards from './flashcards';

export class FlashCardsMain extends Component {
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
        this.props.getFlashCards(`http://localhost:8000/flashcards/flash_card_cards/${this.props.location.pathname.split('/')[2]}`);
    }
    add = () => {
        this.setState(state => ({
            add: !state.add
        }));
    }
    view = () => {
        this.setState(state => ({
            view: !state.view
        }));
    }
    edit = (event) => {
        if(event === undefined){
            this.setState({
                edit: {
                    edited: !this.state.edit.edited,
                    editID: null
                }
            })
        }else{
            this.setState({
                edit: {
                    edited: !this.state.edit.edited,
                    editID: event.target.name
                }
            });
        }
    }
    deleteFlashCard = (event) => {
        const payload = {
            flash_card_id: event.target.name,
            flash_card_deck_id: this.props.location.pathname.split('/')[2]
        };
        this.props.deleteFlashcard(payload);
    }
    render() {
        return (<FlashCards flashcard={{
            add: this.add,
            edit: this.edit,
            deleteFlashCard: this.deleteFlashCard,
            location: this.props.location,
            flashState: this.state
        }}/>)
    }
}

export default connect(({flashcards}) => ({flashcards}), profileActions)(FlashCardsMain);
