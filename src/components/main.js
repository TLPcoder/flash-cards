'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../actions/profile-acitons';

class Main extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if(this.props.users.user){
            var data = sessionStorage.getItem('user');
            console.log(data);
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
        console.log('profile props', this.props);
        return (
            <div>
                <h1>somestuff</h1>
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
