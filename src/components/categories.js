'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as flashCards from '../actions/profile-actions';
import {Link} from 'react-router-dom';

const Categories = props => {
    function buildCategories() {
        return props.state.flashcards.categories.map(el => {
            var toDeck = `/deck/${el.field_of_study_id}`;
            return (
                <Link className='categories-card' to={toDeck}>
                    <h4>{el.field_name}</h4>
                    <h5>{el.description}</h5>
                </Link>
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
