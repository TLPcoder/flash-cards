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
    if (props.state.categories.length === 0 && !props.state.traverse.categories.add) {
        return (
            <div>
                <div className='nav'>
                    <div className='nav-left'></div>
                    <div className='nav-center'>
                        <h1 className='title-main'>Subjects</h1>
                    </div>
                    <div className='nav-right'>
                        <div className='nav-item'>
                            <NavBar/>
                        </div>
                    </div>
                </div>
                <input type="button" className='center-catergory-button level-item button is-large button-left is-primary is-outlined no-category-button' value="Add First Category" onClick={() => {
                    props.addCategoryTraverse(!props.state.traverse.categories.add)
                }}/>
            </div>
        )
    } else if (props.state.traverse.categories.add && props.state.categories.length !== 0) {
        return (
            <div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item fix-nav'>
                                <AddCategory/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Subjects</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar/>
                            </div>
                        </div>
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
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item fix-nav'>
                                <EditCategory/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Subjects</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar className='nav-item'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='category-container'>
                    <CategoryBuilder deleteCategory={deleteCategory}/>
                </div>
            </div>
        )
    } else if (props.state.traverse.categories.add && props.state.categories.length === 0) {
        return (
            <div>
                <div className='nav'>
                    <div className='nav-left'></div>
                    <div className='nav-center'>
                        <h1 className='title-main'>Subjects</h1>
                    </div>
                    <div className='nav-right'>
                        <div className='nav-item'>
                            <NavBar/>
                        </div>
                    </div>
                </div>
                <div className='center-catergory'>
                    <AddCategory className='nav-item'/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='nav-bar-main'>
                    <div className='nav'>
                        <div className='nav-left'>
                            <div className='nav-item'>
                                <input type="button" className='fix-nav button button-left is-primary is-outlined' value="Add" onClick={() => {
                                    props.addCategoryTraverse(!props.state.traverse.categories.add)
                                }}/>
                            </div>
                        </div>
                        <div className='nav-center'>
                            <h1 className='title-main'>Subjects</h1>
                        </div>
                        <div className='nav-right'>
                            <div className='nav-item'>
                                <NavBar/>
                            </div>
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
