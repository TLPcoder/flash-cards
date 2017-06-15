'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../../actions/profile-actions';
import * as traverse from '../../actions/traversing-actions';

const AddCategory = props => {
    var category = null
    function createCategory() {
        console.log(category.value);
        var payload = {
            user_id: sessionStorage.getItem('user'),
            field_name: category.value,
            description: ''
        };
        props.addCategory(payload);
        props.addCategoryTraverse(!props.state.traverse.categories.add);
    }

    return (
        <div id='add-category-container' className='field has-addons'>
            <p className='control'>
                <input type="text" placeholder='Subject' ref={(input) =>{category=input}} className='input' id='category-field-name'/>
            </p>
            <p className='control' id='edit-button-categories'>
                <input type="button" value='Add'className='button is-primary is-outlined' onClick={createCategory}/>
                <input type="button" className='button is-danger is-outlined' value='back' onClick={() => {
                    props.addCategoryTraverse(!props.state.traverse.categories.add)
                }}/>
            </p>
        </div>
    )
}

function mapStateToProps(state) {
    return {state: state}
}

export default connect(mapStateToProps, {
    ...flashCards,
    ...traverse
})(AddCategory);
