'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';


const AddDeck = props => {
    function addDeck(){
        const payload = {
            method: 'POST',
            url: '',
            body:{
                flash_card_deck_name: document.getElementById('deck-card-name').value,
                field_of_study_id: props.location.pathname.split('/')[2]
            }
        };
        console.log('add deck props', props);
        props.postUserDecks(payload);
    }
    return(
        <div>
            <input type="text" placeholder='Deck Name' id ='deck-card-name'/>
        <input type="button" value="Add" onClick={addDeck}/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        state
    };
}

export default connect(mapStateToProps,{...profileActions})(AddDeck)
