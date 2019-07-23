import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    placeholder="Please write your to-do list :)"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="button"
                    value="Add"
                    className="btn"
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.PropTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
