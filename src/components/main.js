'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-actions';
import Categories from './categories';

class Main extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if(this.props.users.user){
            var data = sessionStorage.getItem('user');
            const payload = {
                method: 'GET',
                url: `http://localhost:8000/flashcards/field_of_study/${data}`
            };
            this.props.getUserCategories(payload);
        }else{
            this.props.router.history.push('/');
        }
    }
    render() {
        return (
            <div>
                <Categories/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    ...profileActions
})(Main)
