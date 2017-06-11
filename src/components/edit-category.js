'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';

const EditCategory = props => {
    function editCategory() {
        var payload = {
            user_id: sessionStorage.getItem('user'),
            field_of_study_id: props.state.traverse.categories.edit.categoryID,
            field_name: document.getElementById('edit-field-name').value,
            description: ''
        };
        props.editCategory(payload);
        props.editCategoryTraverse({
            editCategory: !props.state.traverse.categories.edit.editCategory,
            categoryID: props.state.traverse.categories.edit.categoryID
        });
    }
    function back() {
        props.editCategoryTraverse({
            editCategory: !props.state.traverse.categories.edit.editCategory,
            categoryID: props.state.traverse.categories.edit.categoryID
        });
    }
    return (
        <div id='edit-category-container' className='field has-addons'>
            <p className='control'>
                <input className='input' type="text" placeholder='Subject' id='edit-field-name'/>
            </p>
            <p className='control button-edit-submit'>
                <input type="button" value='Update' className='button is-primary is-outlined' onClick={editCategory}/>
                <input type="button" className='button is-danger is-outlined' value='back' onClick={back}/>
            </p>
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
