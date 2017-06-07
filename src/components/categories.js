'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import {Link} from 'react-router-dom';

const Categories = props => {
    function editCategory(event) {
        const payload = {
            method:'PUT',
            url: '',
            body:{}
        };

    }
    function deleteCategory(event) {
        const payload = {
            method:'PUT',
            url: '',
            body:{}
        };
        this.props.deleteCategory(payload);
    }
    function buildCategories() {
        return props.state.flashcards.categories.map(el => {
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

    return (
        <div>{buildCategories()}</div>
    )
}

function mapStateToProps(state) {
    return {state}
}

export default connect(mapStateToProps, {
    ...flashCards
})(Categories);
