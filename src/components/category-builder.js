'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as traverse from '../actions/traversing-actions';
import {Link} from 'react-router-dom';
const CategoryBuilder = props => {
    function editCategory({target}){
        props.editCategoryTraverse({
            categoryID: target.name,
            editCategory: !props.traverse.categories.edit.editCategory
        });
    }
    function buildCategories() {
        console.log('buildCategoriesasfdsfsdf', props);
        return props.categories.map(el => {
            var toDeck = `/deck/${el.field_of_study_id}`;
            return (
                <div className='categories-card'>
                    <input type='button' onClick={editCategory} value='edit' name={el.field_of_study_id}/>
                    <input type='button' onClick={props.deleteCategory} value='delete' name={el.field_of_study_id}/>
                    <Link to={toDeck}>
                        <h4>{el.field_name}</h4>
                        <h5>{el.description}</h5>
                    </Link>
                </div>
            )
        });
    }
    return (
        <div>
            {buildCategories()}
        </div>
    )
}

export default connect(({categories,traverse}) => ({categories,traverse}), traverse)(CategoryBuilder)
