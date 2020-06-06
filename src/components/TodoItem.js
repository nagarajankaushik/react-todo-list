import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {

    getStyle() {
        return {
            background : '#f4f4f4',
            padding : '10px',
            margin : '5px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderRadius: '1px',
            left: '10px',
            boxShadow:  '5px 5px 10px #b7b7b7,   -5px -5px 10px #ffffff',
        }
    }

    render() {
        const {title, id, completed} = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" 
                        onChange={this.props.toggleComplete.bind(this,id)} 
                        defaultChecked = {completed}
                    />
                    {' '}
                    { title }
                    <button style={btnStyle}
                        onClick = {this.props.deleteIn.bind(this,id)} >x</button>
                    
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteIn: PropTypes.func.isRequired
}

const btnStyle = {
    float: 'right',
    background: '#2b2b2b',
    borderRadius: '50%',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    color:'white',
}