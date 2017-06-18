'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../../actions/profile-actions';
import * as traverse from '../../actions/traversing-actions';
import Categories from './categories';

class Main extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if(this.props.users.user){
            var data = sessionStorage.getItem('user');
            this.props.getUserCategories(`https://cyber-flash-backend.herokuapp.com/flashcards/field_of_study/${data}`);
        }else{
            this.props.router.history.push('/');
        }
    }
    render() {
        return (
            <div>
                <Categories router={this.props.router}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    ...profileActions,
    ...traverse
})(Main)
