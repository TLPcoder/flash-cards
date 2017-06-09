import React, {Component} from 'react';
import {connect} from 'react-redux';

export class StudyFlashcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: false,
            question: true,
            counter: 0
        };
    }
    switch = () => {
        this.setState({
            answer: !this.state.answer,
            question: !this.state.question
        })
    }
    buildFlashcardAnswer = () => {
        return (
            <div>
                <input type="button" value='back' onClick={() => {
                    this.setState({
                        answer: false,
                        question: true,
                        counter: this.state.counter-1
                    })
                }}/>
                <h4 onClick={this.switch}>{this.props.flashcards[this.state.counter].answer}</h4>
                <input type="button" value='next' onClick={() => {
                    this.setState({
                        answer: false,
                        question: true,
                        counter: this.state.counter + 1
                    })
                }}/>
            </div>
        )
    }
    buildFlashcardQuestion = () => {
        return (
            <div>
                <input type="button" value='back' onClick={() => {
                    this.setState({
                        answer: false,
                        question: true,
                        counter: this.state.counter - 1
                    })
                }}/>
                <h4 onClick={this.switch}>{this.props.flashcards[this.state.counter].question}</h4>
                <input type="button" value='next' onClick={() => {
                    this.setState({
                        answer: false,
                        question: true,
                        counter: this.state.counter+ 1
                    })
                }}/>
            </div>
        )
    }
    render() {
        console.log('study props', this.props);
        const {answer} = this.state;
        if (answer) {
            return (
                <div>{this.buildFlashcardAnswer()}</div>
            )
        } else {
            return (
                <div>{this.buildFlashcardQuestion()}</div>
            )
        }
    }
}

export default connect(({flashcards, traverse}) => ({flashcards, traverse}))(StudyFlashcard)
