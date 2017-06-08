'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';


const AddDeck = props => {
    function addDeck(){
        const payload = {
            method: 'POST',
            url: ''
        }
    }
    return(
        <div>
            <input type="text" placeholder='Deck Name'/>
            <input type="button" value="Add"/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        state
    };
}

export default connect(mapStateToProps,{...profileActions})(AddDeck)
