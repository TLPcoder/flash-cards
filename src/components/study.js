import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Study extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0;
        }
    }
    render(){
        console.log('study props', this.props);
        return (
            <div><h1>something</h1></div>
        )
    }
}

export default connect(({flashcards, traverse}) => ({flashcards,traverse}))(Study)
