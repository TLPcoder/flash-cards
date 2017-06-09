'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import AddCategory from './add-category';
import EditCategory from './edit-category';
import CategoryBuilder from './category-builder';

const Categories = props => {
    function deleteCategory({target}) {
        var user = sessionStorage.getItem('user');
        props.deleteCategory({field_of_study_id: target.name, user_id: user});
    }
    if (props.state.traverse.categories.add) {
        return (

            <div>
                <AddCategory/>
                <CategoryBuilder deleteCategory={deleteCategory}/>
            </div>
        )
    } else if (props.state.traverse.categories.edit.editCategory) {
        return (
            <div>
                <EditCategory/>
                <CategoryBuilder deleteCategory={deleteCategory}/>
            </div>
        )
    } else {
        return (
            <div>
                <input type="button" value="Add" onClick={() => {
                    props.addCategoryTraverse(!props.state.traverse.categories.add)
                }}/>
                <CategoryBuilder deleteCategory={deleteCategory}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {state}
}

export default connect(mapStateToProps, {
    ...flashCards,
    ...traverse
})(Categories);
