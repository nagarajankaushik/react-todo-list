import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    addingTodo = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <form style={{display: 'flex'}}
                onSubmit = {this.submitTodo} >
                <input type="text" 
                    name="title" 
                    placeholder="Get what done?"
                    autoComplete='off'
                    style={textBoxStyle}
                    value= {this.state.title}
                    onChange = {this.addingTodo}/>
                <input type="submit" 
                    value="Add Todo"
                    className="btn"
                    style={btnStyle}/>
            </form>
        )
    }
}

const textBoxStyle = {
    flex:'10',
    borderRadius: '1%',
    border: 'none',
    padding: '5px 15px',
}

const btnStyle = {
    display: 'inline-block',
    flex:'1',
    borderRadius: '1%',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    color:'white',

}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}