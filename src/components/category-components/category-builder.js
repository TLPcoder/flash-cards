'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as traverse from '../../actions/traversing-actions';
import {Link} from 'react-router-dom';

const CategoryBuilder = props => {
    function editCategory({target}) {
        props.editCategoryTraverse({
            categoryID: target.name,
            editCategory: !props.traverse.categories.edit.editCategory
        });
    }
    function buildCategories() {
        return props.categories.map(el => {
            var toDeck = `/deck/${el.field_of_study_id}`;
            return (
                <div className='columns'>
                    <div className='categories-card column is-half is-offset-one-quarter'>
                        <div className='category-card'>
                            <input type='button' className='button is-primary is-outlined' onClick={editCategory} value='edit' name={el.field_of_study_id}/>
                            <input type='button' className='button is-danger is-outlined' onClick={props.deleteCategory} value='delete' name={el.field_of_study_id}/>
                        </div>
                        <div className='subject-name'>
                            <Link to={toDeck}>
                                <h4 className='title is-2'>{el.field_name}</h4>
                            </Link>
                        </div>
                    </div>
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

export default connect(({categories, traverse}) => ({categories, traverse}), traverse)(CategoryBuilder)
