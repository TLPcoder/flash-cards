'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import * as traverse from '../actions/traversing-actions';
import {Link} from 'react-router-dom';
import AddCategory from './add-category';
import EditCategory from './edit-category';
import CategoryBuilder from './category-builder';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.deleteCategory = this.deleteCategory.bind(this);
    }
    deleteCategory({target}) {
        var user = sessionStorage.getItem('user');
        const payload = {
            method: 'DELETE',
            url: 'http://localhost:8000/flashcards/delete_category/',
            body: {
                field_of_study_id: target.name,
                user_id: user
            }
        };
        this.props.deleteCategory(payload);
    }
    render() {
        if (this.props.state.traverse.categories.add) {
            return (

                <div>
                    <AddCategory added={this.addCategory}/>
                    <CategoryBuilder categories={{
                        categories: this.props.state.categories,
                        editCategory: this.editCategory,
                        deleteCategory: this.deleteCategory
                    }}/>
                </div>
            )
        } else if (this.props.state.traverse.categories.edit.editCategory) {
            return (
                <div>
                    <EditCategory/>
                    <CategoryBuilder categories={{
                        categories: this.props.state.categories,
                        editCategory: this.editCategory,
                        deleteCategory: this.deleteCategory
                    }}/>
                </div>
            )
        } else {
            console.log('askjfhasdkjfhlksdjahasjfklhadsfjk', this.props);
            return (
                <div>
                    <input type="button" value="Add" onClick={() => {
                        this.props.addCategoryTraverse(!this.props.state.traverse.categories.add)
                    }}/>
                    <CategoryBuilder categories={{
                        categories: this.props.state.categories,
                        editCategory: this.editCategory,
                        deleteCategory: this.deleteCategory
                    }}/>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {state}
}

export default connect(mapStateToProps, {
    ...flashCards,
    ...traverse
})(Categories);
