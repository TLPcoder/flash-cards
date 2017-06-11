'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import AddCategory from './add-category';
import EditCategory from './edit-category';
import CategoryBuilder from './category-builder';
import NavBar from './nav-bar';

const Categories = props => {
    function deleteCategory({target}) {
        var user = sessionStorage.getItem('user');
        props.deleteCategory({field_of_study_id: target.name, user_id: user});
    }
    if (props.state.traverse.categories.add) {
        return (
            <div>
                <div className='level nav-bar-main'>
                    <div className='level-right'>
                        <AddCategory className='level-item'/>
                    </div>
                    <div className='level-left'>
                        <NavBar className='level-item'/>
                    </div>
                </div>
                <div className='category-container'>
                    <CategoryBuilder deleteCategory={deleteCategory}/>
                </div>
            </div>
        )
    } else if (props.state.traverse.categories.edit.editCategory) {
        return (
            <div>
                <div className='nav-bar-main'>
                    <div className='level'>
                        <div className='level-left'>
                            <EditCategory className='level-item'/>
                        </div>
                        <div className='level-right'>
                            <NavBar className='level-item'/>
                        </div>
                    </div>
                </div>
                <div className='category-container'>
                    <CategoryBuilder deleteCategory={deleteCategory}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='nav-bar-main'>
                    <div className='level'>
                        <div className='level-left'>
                            <input type="button" className='level-item button button-left is-primary is-outlined' value="Add" onClick={() => {
                                props.addCategoryTraverse(!props.state.traverse.categories.add)
                            }}/>
                        </div>
                        <div className='level-right'>
                            <NavBar className='level-item'/>
                        </div>
                    </div>
                </div>
                <div className='category-container'>
                    <CategoryBuilder deleteCategory={deleteCategory}/>
                </div>
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
