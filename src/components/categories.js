'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import {Link} from 'react-router-dom';
import AddCategory from './add-category';
import EditCategory from './edit-category';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCategory: false,
            edit: {
                editCategory: false,
                categoryID: null
            }
        };
        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.buildCategories = this.buildCategories.bind(this);
        this.addCategory = this.addCategory.bind(this);
    }
    addCategory() {
        this.setState({
            addCategory: !this.state.addCategory
        });
    }
    editCategory(event) {
        event === undefined?
        this.setState({
            edit: {
                editCategory: !this.state.edit.editCategory,
                categoryID: null
            }
        }):this.setState({
            edit: {
                editCategory: !this.state.edit.editCategory,
                categoryID: event.target.name
            }
        });
    }
    deleteCategory(event) {
        var user = sessionStorage.getItem('user');
        const payload = {
            method: 'DELETE',
            url: 'http://localhost:8000/flashcards/delete_category/',
            body: {
                field_of_study_id: event.target.name,
                user_id: user
            }
        };
        this.props.deleteCategory(payload);
    }
    buildCategories() {
        return this.props.state.categories.map(el => {
            var toDeck = `/deck/${el.field_of_study_id}`;
            return (
                <div className='categories-card'>
                    <input type='button' onClick={this.editCategory} value='edit' name={el.field_of_study_id}/>
                    <input type='button' onClick={this.deleteCategory} value='delete' name={el.field_of_study_id}/>
                    <Link to={toDeck}>
                        <h4>{el.field_name}</h4>
                        <h5>{el.description}</h5>
                    </Link>
                </div>
            )
        });
    }
    render() {
        console.log(this.props);
        if (this.state.addCategory) {
            return (

                <div>
                    <AddCategory added={this.addCategory}/> {this.buildCategories()}
                </div>
            )
        } else if (this.state.edit.editCategory) {
            return (
                <div>
                    <EditCategory edit={{
                        edited: this.editCategory,
                        editID: this.state.edit.categoryID
                    }}/> {this.buildCategories()}
                </div>
            )
        } else {
            return (
                <div>
                    <input type="button" value="Add" onClick={this.addCategory}/> {this.buildCategories()}
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {state}
}

export default connect(mapStateToProps, {
    ...flashCards
})(Categories);
