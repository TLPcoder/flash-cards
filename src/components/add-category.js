'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';

const AddCategory = props => {
    function createCategory() {
        var payload = {
            method:'POST',
            url:`http://localhost:8000/flashcards/create_category`,
            body: {
                user_id: sessionStorage.getItem('user'),
                field_name: document.getElementById('category-field-name').value,
                description: document.getElementById('category-description').value
            }
        };
        props.addCategory(payload);
        props.added();
    }
    return (
        <div id='add-category-container'>
            <input type="text" placeholder='Subject' id='category-field-name'/>
            <input type="text" placeholder='Description' id='category-description'/>
            <input type="submit" onClick={createCategory}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {state: state}
}

export default connect(mapStateToProps, {
    ...flashCards
})(AddCategory);
