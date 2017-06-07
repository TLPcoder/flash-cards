'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import {Link} from 'react-router-dom';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCategory: false,
            editCategory: false
        };
        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.buildCategories = this.buildCategories.bind(this);
    }
    editCategory(event) {
        const payload = {
            method: 'PUT',
            url: '',
            body: {}
        };

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
        return this.props.state.flashcards.categories.map(el => {
            var toDeck = `/deck/${el.field_of_study_id}`;
            return (
                <div className='categories-card'>
                    <input type='button' onClick={editCategory} value='edit' name={el.field_of_study_id}/>
                    <input type='button' onClick={deleteCategory} value='delete' name={el.field_of_study_id}/>
                    <Link to={toDeck}>
                        <h4>{el.field_name}</h4>
                        <h5>{el.description}</h5>
                    </Link>
                </div>
            )
        });
    }
    render() {
        if (this.state.addCategory) {
            return (
                <div>{buildCategories()}</div>
            )
        }else if(this.state.editCategory){
            return (
                <div>{buildCategories()}</div>
            )
        }else{
            return (
                <div>{buildCategories()}</div>
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
