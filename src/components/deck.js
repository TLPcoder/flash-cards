'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../actions/profile-actions';

export class Deck extends Component{
    constructor(props){
        super(props);
        this.buildDecks = this.buildDecks.bind(this);
    }
    componentWillMount(){
        const payload = {
            method:'GET',
            url: `http://localhost:8000/flashcards/flash_card_deck/${this.props.location.pathname.split('/')[2]}`
        };
        this.props.getUserDecks(payload);
    }
    buildDecks(){
        return this.props.state.flashcards.deck.map(el => {
            var toFlash = `/flashcards/${el.flash_card_deck_id}`;
            return (
                <Link className='deck-card' to={toFlash}>
                    <h4>{el.flash_card_deck_name}</h4>
                </Link>
            )
        });
    }
    render() {
        console.log(this.props.state);
        return (
            <div>{this.buildDecks()}</div>
        )
    }
}

function mapStateToProps(state) {
    return {state: state};
}

export default connect(mapStateToProps,{...profileActions})(Deck);
