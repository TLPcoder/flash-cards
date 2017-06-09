'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';

const EditCategory = props => {
    function editCategory() {
        var payload = {
            method: 'PUT',
            url: `http://localhost:8000/flashcards/edit_category`,
            body: {
                user_id: sessionStorage.getItem('user'),
                field_of_study_id: props.state.traverse.categories.edit.categoryID,
                field_name: document.getElementById('edit-field-name').value,
                description: document.getElementById('edit-description').value
            }
        };
        props.editCategory(payload);
        props.editCategoryTraverse({
            editCategory:!props.state.traverse.categories.edit.editCategory,
            categoryID: props.state.traverse.categories.edit.categoryID
        });
    }
    return (
        <div id='edit-category-container'>
            <input type="text" placeholder='Subject' id='edit-field-name'/>
            <input type="text" placeholder='Description' id='edit-description'/>
            <input type="submit" onClick={editCategory}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {state: state};
}

export default connect(mapStateToProps, {
    ...flashCards,
    ...traverse
})(EditCategory);
